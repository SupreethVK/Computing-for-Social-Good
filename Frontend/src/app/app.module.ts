import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { TerminologiesComponent } from './components/terminologies/terminologies.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicetypeComponent } from './components/servicetype/servicetype.component';
import { ServicedataComponent } from './components/servicedata/servicedata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TerminologiesComponent,
    ServicesComponent,
    ContactComponent,
    ServicetypeComponent,
    ServicedataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCa3TJ9qBSjDQRD5vCe8VNgycowD64YIIY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ServicedataComponent]
})
export class AppModule { }
