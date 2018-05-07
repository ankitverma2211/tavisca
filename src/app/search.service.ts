import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
//import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})


export class SearchService {
  
  private search_init_api_url = `https://public-be.oski.io/hotel/v1.0/search/init`;
  private search_status_api_url = `https://public-be.oski.io/hotel/v1.0/search/status`;
  private search_result_api_url = `https://public-be.oski.io/hotel/v1.0/search/results`;
  
  constructor(private http: Http) {}

  searchInit(term : Object): Observable<any>{
      
    term = JSON.stringify(term)
    return this.http
      .post(this.search_init_api_url, term, {headers: this.setHeaders()})
      .map((r) => r.json())
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }
  searchStatus(searchId: Object): Observable<any>{ 
    return Observable.interval(1500)
    .concatMap(()=> this.http.post(this.search_status_api_url,searchId,{headers:this.setHeaders()}))
    .map((data) => data.json())
    .first(data=> data.status === "Complete");
  }

  
  
  search_results(searchParams : Object): Observable<any>{
    return this.http
      .post(this.search_result_api_url, searchParams ,{headers: this.setHeaders()})
      .map((r: Response) => r.json())
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
    }
    private setHeaders(){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('oski-tenantId','Demo');
      return headers;
    }    
}

