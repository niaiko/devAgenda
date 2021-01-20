import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AccueilComponent } from './components/Accueill/accueil/accueil.component';
import { FormationComponent } from './components/Formation/formation/formation.component';
import { LoginAuthComponent } from './components/Authentification/connection/login-auth/login-auth/login-auth.component';
import { DetailFormationComponent } from './components/Formation/detail-information/detail-formation/detail-formation.component';
import { AgendaComponent } from './components/Agenda/agenda/agenda.component';
import { AdminformationComponent } from './components/Formation/Admin-formation/adminformation/adminformation.component';
import { AjoututilisateurComponent } from './components/Authentification/connection/ajout_utilisateur/ajoututilisateur/ajoututilisateur.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'Accueil',component: AccueilComponent },
    { path: 'Formation',component: FormationComponent },
    { path: 'Authentification',component: LoginAuthComponent },
    { path: 'Authentification/nouveau_compte',component: AjoututilisateurComponent },
    { path: 'Details-formation',component: DetailFormationComponent },
    { path: 'agenda',component: AgendaComponent },
    { path: 'Liste/formation',component: AdminformationComponent },
    { path: 'Liste/utilisateurs',component: AdminformationComponent },

    


];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
