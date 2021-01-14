import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import localeFr from '@angular/common/locales/fr';
import { NgxSelectModule } from 'ngx-select-ex';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'fr');
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        CommonModule,
        NgxSelectModule,
        HttpClientModule,
        PdfViewerModule,
    ],
    providers: [
        DatePipe,
        ToastrService,

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
