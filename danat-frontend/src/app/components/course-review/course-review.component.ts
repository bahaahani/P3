import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-course-review',
  templateUrl: './course-review.component.html',
  styleUrls: ['./course-review.component.css']
})
export class CourseReviewComponent implements OnInit {
  @Input() courseId: string;
  reviews: any[] = [];
  reviewForm: FormGroup;
  averageRating: number = 0;
  loading = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private reviewService: ReviewService
  ) { }

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', Validators.required]
    });
    this.loadReviews();
  }

  loadReviews() {
    this.loading = true;
    this.reviewService.getCourseReviews(this.courseId).subscribe(
      (data) => {
        this.reviews = data;
        this.calculateAverageRating();
        this.loading = false;
      },
      (error) => {
        this.error = 'Error loading reviews';
        this.loading = false;
      }
    );
  }

  calculateAverageRating() {
    if (this.reviews.length === 0) {
      this.averageRating = 0;
    } else {
      const sum = this.reviews.reduce((total, review) => total + review.rating, 0);
      this.averageRating = sum / this.reviews.length;
    }
  }

  onSubmit() {
    if (this.reviewForm.invalid) {
      return;
    }

    this.loading = true;
    this.reviewService.addReview(this.courseId, this.reviewForm.value).subscribe(
      (data) => {
        this.reviews.push(data);
        this.calculateAverageRating();
        this.reviewForm.reset();
        this.loading = false;
      },
      (error) => {
        this.error = 'Error submitting review';
        this.loading = false;
      }
    );
  }

  deleteReview(reviewId: string) {
    this.loading = true;
    this.reviewService.deleteReview(this.courseId, reviewId).subscribe(
      () => {
        this.reviews = this.reviews.filter(review => review.id !== reviewId);
        this.calculateAverageRating();
        this.loading = false;
      },
      (error) => {
        this.error = 'Error deleting review';
        this.loading = false;
      }
    );
  }
}