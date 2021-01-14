import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarOptions, EventObject } from 'ngx-fullcalendar';
declare var $: any;

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  options: FullCalendarOptions;
  events: EventObject[];
  filtre: any;
  infoPlanning = {
    plan:{
      datedebut: null,
      datefin: null,
      titre: null
    }
  }

  @ViewChild('modalAjoutPlanning') modalAjoutPlanning;
  @ViewChild('modalInfoPlanning') modalInfoPlanning;

  constructor() { }

  ngOnInit(): void {
    this.options = {
      defaultDate: new Date(),
      editable: true
    };

    this.events = [
      { id: 'a', title: 'My Birthday', allDay: true },
      { id: 'b', title: 'test', start: this.options.defaultDate , end: '2021-01-26T23:00:00' }
    ]
  }

  clickJour(event){
    console.log(event);
    const date = new Date(event.dateStr);
    const annee = date.getFullYear();
    let mois = (date.getMonth() + 1).toString();
    let jour: string = date.getDate().toString();
    this.infoPlanning.plan.datedebut = annee + '-' + mois + '-' + jour;
    console.log('this.infoPlanning.plan.datedebut => ', this.infoPlanning.plan.datedebut);
    this.ouvrireModalJour();
  }

  ouvrireModalJour() {
    $(this.modalAjoutPlanning.nativeElement).modal('show');
  }

  fermeModalOrdreJour() {
    $(this.modalAjoutPlanning.nativeElement).modal('hide');
  }

  clickEvent(event){
    console.log("event =>", event);
    this.infoPlanning.plan.datedebut = event.event.start;
    this.infoPlanning.plan.datefin = event.event.end;
    this.infoPlanning.plan.titre = event.event.title;
    this.ouvrirModalinfo();
  }

  
  ouvrirModalinfo() {
    $(this.modalInfoPlanning.nativeElement).modal('show');
  }

  fermerModalinfo() {
    $(this.modalInfoPlanning.nativeElement).modal('hide');
  }


}
