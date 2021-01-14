import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { FooterComponent } from './shared/footer/footer.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
    dayGridPlugin,
    interactionPlugin
  ]);

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent
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
    ],
    providers: [
        ToastrService ,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
