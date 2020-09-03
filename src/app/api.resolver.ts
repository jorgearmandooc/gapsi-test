import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, Router} from '@angular/router';
import { ApiService } from './api.service';

@Injectable()

export class RegisterVisitor implements Resolve<any>{
	
  constructor(private api: ApiService) {}

	resolve() {
		return this.api.registerVisitor();
	}

}

@Injectable()

export class GetProducts implements Resolve<any>{
	
  constructor(private api: ApiService) {}

	resolve() {
		return this.api.getProducts(1);
	}

}