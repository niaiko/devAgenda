import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigatedetailformation() {
    this.router.navigate(['/Details-formation'])

}
}
