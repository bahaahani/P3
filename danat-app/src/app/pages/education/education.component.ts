import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCatalogComponent } from "./course-catalog/course-catalog.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, CourseCatalogComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent { }