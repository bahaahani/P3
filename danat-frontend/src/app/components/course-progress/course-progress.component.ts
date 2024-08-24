import { Component, OnInit, Input } from '@angular/core';
import { CourseProgressService } from '../../services/course-progress.service';

@Component({
  selector: 'app-course-progress',
  templateUrl: './course-progress.component.html',
  styleUrls: ['./course-progress.component.css']
})
export class CourseProgressComponent implements OnInit {
  @Input() courseId: string;
  progress: number = 0;
  milestones: any[] = [];

  constructor(private courseProgressService: CourseProgressService) { }

  ngOnInit(): void {
    this.loadCourseProgress();
  }

  loadCourseProgress() {
    this.courseProgressService.getUserCourseProgress().subscribe(
      (data) => {
        const courseProgress = data.find(course => course.id === this.courseId);
        if (courseProgress) {
          this.progress = courseProgress.progress;
          this.milestones = courseProgress.milestones;
        }
      },
      (error) => {
        console.error('Error loading course progress', error);
      }
    );
  }

  updateProgress(milestone: any) {
    milestone.completed = !milestone.completed;
    this.courseProgressService.updateCourseProgress(this.courseId, { milestones: this.milestones }).subscribe(
      (data) => {
        this.progress = data.progress;
      },
      (error) => {
        console.error('Error updating course progress', error);
        milestone.completed = !milestone.completed; // Revert the change if update fails
      }
    );
  }
}