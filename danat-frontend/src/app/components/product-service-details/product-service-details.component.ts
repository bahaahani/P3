import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-service-details',
  templateUrl: './product-service-details.component.html',
  styleUrls: ['./product-service-details.component.css']
})
export class ProductServiceDetailsComponent implements OnInit {
  courseId: string;
  course: any; // You might want to create a Course interface/type
  loading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient, private meta: Meta) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.http.get(`/api/product-details/${this.courseId}`).subscribe(data => {
      this.course = data;
      this.loading = false;
    });
    this.meta.addTags([
      { name: 'description', content: 'Detailed information about our products and services.' },
      { name: 'keywords', content: 'products, services, details' }
    ]);
  }

  share(platform: string) {
    // Implement share functionality
  }
}