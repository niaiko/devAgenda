import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'app/service/authentification/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoututilisateur',
  templateUrl: './ajoututilisateur.component.html',
  styleUrls: ['./ajoututilisateur.component.css']
})
export class AjoututilisateurComponent implements OnInit {

  initAdd = {
    "username":"",
    "password":"",
    "email":""    
    }

  constructor(private authservice:AuthentificationService,private router: Router) { }
  resAddutilisateur:any;
  ngOnInit(): void {
  }


  ajoutUtilisateur(){ 
    this.authservice.Adduser(this.initAdd).subscribe(res => {
      this.resAddutilisateur = res; 
      console.log("*res add ==>*",res);
      console.log("AAAAAA==>");
      this.router.navigate(['/Authentification']);
   
 })

}





}