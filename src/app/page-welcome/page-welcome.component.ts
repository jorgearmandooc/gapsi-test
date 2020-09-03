import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.component.html',
  styleUrls: ['./page-welcome.component.css']
})
export class PageWelcomeComponent implements OnInit {

	data: object = {};

  constructor(private router: Router, private route: ActivatedRoute) {
	this.data = this.route.snapshot.data.data;
	console.log(this.data);
  }

  ngOnInit() {
  }

  goToShop(){
    //this.router.navigateByUrl('/shop');
	this.router.navigate(['shop']);
  }

}
