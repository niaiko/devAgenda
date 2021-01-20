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



  // AddUtilisteur(token:string,init:Object){
  // const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
  // return this.httpClient.post<any>(this.url.url + 'addUtilisateur' + init,{ headers: headers, observe: 'response' })
  // }

  ajoututilisateur(datamodel: Object){
     let headerHttp = new HttpHeaders();  
    // return this.httpClient.post('http://final-bch.herokuapp.com/addUtilisateur',datamodel)
    return this.httpClient.post(this.url.url  +'addUtilisateur',datamodel);
    console.log("aaa",datamodel)
    //return this.httpClient.get<any>(this.Globals.wsLink.replace('port', this.port) +'FindParPeriodeKpi' ,filtre);
    
  
  }
  Adduser(datamodel: Object):  Observable <any>  {
    let headerHttp = new HttpHeaders();
    headerHttp = headerHttp.set('Content-type', 'application/json');
   return this.httpClient.post(this.url.url  +'addUtilisateur',datamodel, {responseType: 'text'});
    //return this.httpClient.get<any>(this.Globals.wsLink.replace('port', this.port) +'FindParPeriodeKpi' ,filtre);     
  }

  getToken (datalog:Object) :  Observable <any> {
    let headerHttp = new HttpHeaders();
    headerHttp = headerHttp.set('Content-type', 'application/json');
    return this.httpClient.post(this.url.url  +'log',datalog, {responseType: 'text'});
  }

  // getetatdem() {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.httpClient.get(this.url.url +'utilisateur').map(res => res.json());
  // }

 
  getlisteutilisateurs(auth_token:string): Observable<any> {
    let  headers = new HttpHeaders ({'Content-Type': 'application/text','Authorization': `Bearer ${auth_token}`})
    return this.httpClient.get(this.url.url  +'utilisateur', { headers: headers,responseType: 'json'});
  }


  methodBlabla() 
  {
    const headers = new HttpHeaders().set('Content-Type', 'text');
    return this.httpClient.get(this.url.url +'utilisateur' ,{ headers, responseType: 'text'});
  }


}
