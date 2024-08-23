import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EducationComponent } from './pages/education/education.component';
import { ServicesComponent } from './pages/services/services.component';
import { ResearchComponent } from './pages/research/research.component';
import { EventsComponent } from './pages/events/events.component';
import { PressComponent } from './pages/press/press.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'events', component: EventsComponent },
  { path: 'press', component: PressComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }