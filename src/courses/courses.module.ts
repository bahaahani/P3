import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';

@NgModule({
  declarations: [
    CourseCatalogComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    CourseCatalogComponent
  ]
})
export class CoursesModule { }