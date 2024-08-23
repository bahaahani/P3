import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'about-us', loadComponent: () => import('./components/about-us/about-us.component').then(m => m.AboutUsComponent) },
  { path: 'education', loadComponent: () => import('./pages/education/education.component').then(m => m.EducationComponent) },
  { path: 'services', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
  { path: 'research', loadComponent: () => import('./pages/research/research.component').then(m => m.ResearchComponent) },
  { path: 'events', loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent) },
  { path: 'press', loadComponent: () => import('./pages/press/press.component').then(m => m.PressComponent) },
  { path: 'contact-us', loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent) },
  { path: 'dashboard', loadComponent: () => import('./components/student-dashboard/student-dashboard.component').then(m => m.StudentDashboardComponent) },
];