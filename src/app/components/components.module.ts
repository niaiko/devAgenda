import { ModuleModule } from './../module/module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxFullCalendarModule } from 'ngx-fullcalendar';
import { NgxSelectModule } from 'ngx-select-ex';
import { ReactiveFormsModule } from '@angular/forms';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';




import { NgbdModalBasic } from './modal/modal.component';
import { AccueilComponent } from './Accueill/accueil/accueil.component';
import { FormationComponent } from './Formation/formation/formation.component';
import { LoginAuthComponent } from './Authentification/connection/login-auth/login-auth/login-auth.component';
import { DetailFormationComponent } from './Formation/detail-information/detail-formation/detail-formation.component';
import { AgendaComponent } from './Agenda/agenda/agenda.component';
import { AdminformationComponent } from './Formation/Admin-formation/adminformation/adminformation.component';
import { ListeutilisateursComponent } from './Formation/AdminUtilisateur/listeutilisateurs/listeutilisateurs.component';
import { AjoututilisateurComponent } from './Authentification/connection/ajout_utilisateur/ajoututilisateur/ajoututilisateur.component';
//import { FooterComponent } from 'app/shared/footer/footer/footer.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        FullCalendarModule,
        NgxFullCalendarModule,
        NgxSelectModule,
        ModuleModule,
        ReactiveFormsModule
      ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        AccueilComponent,
        FormationComponent,        
        LoginAuthComponent, DetailFormationComponent, AgendaComponent, AdminformationComponent, ListeutilisateursComponent, AjoututilisateurComponent, 
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
