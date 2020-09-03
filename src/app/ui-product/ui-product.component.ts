import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-ui-product',
  templateUrl: './ui-product.component.html',
  styleUrls: ['./ui-product.component.css']
})
export class UiProductComponent implements OnInit {

@Input() product;

  constructor() { }

  ngOnInit() {
  }

}
