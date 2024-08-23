import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education.component';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';

const routes: Routes = [
  { path: '', component: EducationComponent }
];

@NgModule({
  imports: [
    EducationComponent,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    CourseCatalogComponent
  ]
})
export class EducationModule { }