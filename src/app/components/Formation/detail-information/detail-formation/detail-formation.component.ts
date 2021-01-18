import {Component, Input, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare var $ : any;
@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent  {

    @ViewChild('guideTelechargement') guideTelechargement;

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content, type, modalDimension) {
      if (modalDimension === 'sm' && type === 'modal_mini') {
          this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      } else if (modalDimension == undefined && type === 'Login') {
        this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      } else {
          this.modalService.open(content).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      }

  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return  `with: ${reason}`;
      }
  }

  ouvrirModalGuide() {
    $(this.guideTelechargement.nativeElement).modal('show');
  }

}
