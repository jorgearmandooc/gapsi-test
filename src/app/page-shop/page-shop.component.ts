import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {DragDropModule,CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-page-shop',
  templateUrl: './page-shop.component.html',
  styleUrls: ['./page-shop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ApiService]
})

export class PageShopComponent implements OnInit {
	
	products = [];
	itemSize = 470;
	currentPage = 1;
	gettingMoreProducts = false;

  constructor(private api: ApiService, private route: ActivatedRoute) {
	this.products = this.route.snapshot.data.data.products;	  
  }

  ngOnInit() {
  }

  shoppingCart = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

  }
  
  getProducts(){
	  return this.products.filter( (e) => {
		  return this.shoppingCart.indexOf(e);
	  });
  }
  
	onScroll(event) {
		console.log(event);
		
		if(event > ( this.products.length - 4) * this.currentPage ){
			if(!this.gettingMoreProducts){
				this.gettingMoreProducts = true;
				this.api.getProducts(this.currentPage + 1).then( (response) => {
					console.log(response);

					this.products.concat(response.products);
					this.currentPage++;
					this.gettingMoreProducts = false;
					
					console.log(this.products);

				});
			}
		}
	}

}
