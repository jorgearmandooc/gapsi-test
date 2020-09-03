import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()

export class ApiService{

  Endpoint: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  MakeRequest(Method = "GET", Uri = ""){

    switch(Method){
      case "GET":
        return this.http.get(this.Endpoint + Uri).toPromise();
      break;
      case "POST":
		return this.http.post(this.Endpoint + Uri, null).toPromise();
      break;
    }

  }
	
	registerVisitor(){
		return this.MakeRequest("POST","/visitors").then( (response:any ) => {
			
			return (response.code == 200 ? response.data : {code:500})
			
		}).catch(() => {
			return {code:500};
		});
	}
	
	getProducts(page){
		
		console.log(page);
		
		return this.MakeRequest("GET",`/products?page=${page}`).then( (response:any) => {
			
			return (response.code == 200 ? response.data : {code:500})
			
		}).catch(() => {
			return {code:500};
		});
	}

}