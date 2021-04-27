import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicedataComponent } from './components/servicedata/servicedata.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicetypeComponent } from './components/servicetype/servicetype.component';
import { TerminologiesComponent } from './components/terminologies/terminologies.component';

const routes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'terminologies', component: TerminologiesComponent},
  { path: 'services',
    children: [
    { path: '', component: ServicesComponent },
    { path: ':servicetype', component: ServicetypeComponent },
    { path: ':servicetype/:name', component: ServicedataComponent }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
