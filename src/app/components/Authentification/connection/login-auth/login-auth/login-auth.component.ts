import { Component, OnInit, ViewChild, ViewChildren, QueryList ,SimpleChanges} from '@angular/core';
import { AuthentificationService } from './../../../../../service/authentification/authentification.service';
import { getLocaleWeekEndRange } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})
export class LoginAuthComponent implements OnInit {

  data : Date = new Date();
  errorMessage = ''; // validation error handle
  focus;
  focus1;
    initAdd = {
    "username":"",
    "password":"",
    "email":""
    
    }

    initlog = 
      {
        "username" : "",
        "password" : ""	
      }
    
  email = "";
  password = "";
  addresp:any;
  token;
  resAddutilisateur:any;
  resutilisateurs : any;
  reslog:any;

 
  error: { name: string, message: string } = { name: '', message: '' };
  message = '';


  constructor(private authservice:AuthentificationService,private router: Router) { }

  ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');

      /*Function */
     this.token = localStorage.getItem('id_token');
       
  }

  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
  }




     
     getConnexToken(){ 
        
        this.authservice.getlisteutilisateurs(this.token).subscribe(res => {
        this.resAddutilisateur = res; 
        console.log("*res add *",res); 
        this.getLog();
     
   })

 
 
  

  }

  getLog(){
    this.authservice.getToken(this.initlog).subscribe(res => {
      this.reslog = res ;
      console.log("LOG token ==>",this.reslog);   

    })
  }

  // getlisteutilisateur(){
  //   this.token = this.reslog;
  //   this.authservice.getlisteutilisateurs(this.token).subscribe(res =>{ 
  //   console.log("token",this.token);  
  //   this.resutilisateurs = res.body;
  //   console.log("Liste utilisaterus",this.resutilisateurs);
     

  //   })

  // }

  validateForm() {
    if (this.initAdd.email === "") {
      this.errorMessage = "entrer email";
      return false;
    }

    if (this.initAdd.password === "") {
      this.errorMessage = "entrer mot de passe";
      return false;
    }

    // if (password.lenght < 6) {
    //   this.errorMessage = "Le mot de passe doit comporter au moins 6 caractères ";
    //   return false;
    // }
    this.errorMessage = '';
    return true;

  }


}
