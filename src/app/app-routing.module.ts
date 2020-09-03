import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Resolve, Router} from '@angular/router';

import { ApiService } from './api.service';
import { RegisterVisitor, GetProducts } from './api.resolver';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { PageShopComponent } from './page-shop/page-shop.component';

const routes: Routes = [
	{ path: "", component: PageWelcomeComponent, resolve: { data: RegisterVisitor } },
	{ path: "shop", component: PageShopComponent, resolve: { data: GetProducts } }
	// { path: "signup", component: SignupFormComponent },
	// { path: "home", component: HomeComponent, canActivate:[ApiService], resolve: { auth: ApiService } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
