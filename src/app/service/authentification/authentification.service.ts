import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient, HttpHeaders ,HttpParams,HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  constructor(private httpClient:HttpClient,private url:UrlService ) { }



  ajoututilisateur(datamodel: Object){
     let headerHttp = new HttpHeaders(); 
 
    return this.httpClient.post(this.url.url  +'addUtilisateur',datamodel);
    console.log("aaa",datamodel)
  }

  Adduser(datamodel: Object):  Observable <any>  {
    let headerHttp = new HttpHeaders();
    headerHttp = headerHttp.set('Content-type', 'application/json');
   return this.httpClient.post(this.url.url  +'addUtilisateur',datamodel, {responseType: 'text'});
       
  }

  getToken(datalog:Object) :  Observable <any> {
    let headerHttp = new HttpHeaders();
    headerHttp = headerHttp.set('Content-type', 'application/json');
    return this.httpClient.post(this.url.url  +'log',datalog, {responseType: 'text'});
  } 


  getlisteutilisateurs(token: string): Observable<any> {
    let headers = new HttpHeaders({ "Authorization": "Bearer " + token });
    return this.httpClient.get(this.url.url+'module', { headers: headers, observe: 'response'});
  }
  
  methodBlabla() 
  {
    const headers = new HttpHeaders().set('Content-Type', 'text');
    return this.httpClient.get(this.url.url +'utilisateur' ,{ headers, responseType: 'text'});
  }


}
