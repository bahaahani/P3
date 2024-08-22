import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EducationComponent } from './components/education/education.component';
import { ServicesComponent } from './components/services/services.component';
import { ResearchComponent } from './components/research/research.component';
import { EventsComponent } from './components/events/events.component';
import { PressComponent } from './components/press/press.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'events', component: EventsComponent },
  { path: 'press', component: PressComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }