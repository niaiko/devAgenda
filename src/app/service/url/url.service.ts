import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

     url = "https://final-bch.herokuapp.com/"

}
