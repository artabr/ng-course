import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
})
export class AddCoursePageComponent {
  courseTitle: string = '';
  courseDescription: string = '';
  courseDuration: string = '';

  constructor(private location: Location, private coursesService: CoursesService) {}

  onSaveClick() {
    this.coursesService.createCourse(
      {
        creationDate: '',
        title: this.courseTitle,
        description: this.courseDescription,
        duration: Number(this.courseDuration),
      },
      () => this.location.back(),
    );
  }

  onCancelClick() {
    this.location.back();
  }
}
