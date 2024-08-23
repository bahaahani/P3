import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'about-us', loadComponent: () => import('./components/about-us/about-us.component').then(m => m.AboutUsComponent) },
  { path: 'programs', loadComponent: () => import('./components/programs/programs.component').then(m => m.ProgramsComponent) },
  { path: 'services', loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) },
  { path: 'research', loadComponent: () => import('./components/research/research.component').then(m => m.ResearchComponent) },
  { path: 'events', loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent) },
  { path: 'press', loadComponent: () => import('./pages/press/press.component').then(m => m.PressComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'dashboard', loadComponent: () => import('./components/student-dashboard/student-dashboard.component').then(m => m.StudentDashboardComponent) },
  { path: 'registration', loadComponent: () => import('./components/registration/registration.component').then(m => m.RegistrationComponent) },
  { path: 'news-events', loadComponent: () => import('./components/news-events/news-events.component').then(m => m.NewsEventsComponent) },
  { path: 'gallery', loadComponent: () => import('./components/gallery/gallery.component').then(m => m.GalleryComponent) },
];