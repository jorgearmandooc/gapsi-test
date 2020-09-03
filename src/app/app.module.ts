import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule  } from '@angular/cdk/scrolling';
import {DragDropModule,CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatGridListModule, MatBadgeModule, MatSnackBarModule, MatCardModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { ApiService } from './api.service';
import { RegisterVisitor, GetProducts } from './api.resolver';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { UiProductComponent } from './ui-product/ui-product.component';
import { PageShopComponent } from './page-shop/page-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWelcomeComponent,
    UiToolbarComponent,
    UiProductComponent,
    PageShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
	ScrollingModule,
	DragDropModule,
    MatGridListModule,
    MatBadgeModule,
	MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService, RegisterVisitor, GetProducts],
  bootstrap: [AppComponent]
})
export class AppModule { }
