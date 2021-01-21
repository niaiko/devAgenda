import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ToastrModule, ToastrService  } from 'ngx-toastr';
import { NgxFullCalendarModule } from 'ngx-fullcalendar';
import { FullCalendarModule } from '@fullcalendar/angular';  // for FullCalendar!
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ModuleModule } from './module/module.module';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { AuthentificationService } from './service/authentification/authentification.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
    dayGridPlugin,
    interactionPlugin
  ]);

  //registerLocaleData(localeFr, 'fr');
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
      
    ],
    imports: [
  
    BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        PdfViewerModule,
        ToastrModule,
        NgxFullCalendarModule,
        FullCalendarModule,
        ModuleModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [AuthentificationService
   
    
    ],  
      
    bootstrap: [AppComponent]
})
export class AppModule { }
