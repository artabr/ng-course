import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../types/types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
})
export class EditCoursePageComponent implements OnInit {
  course?: Course;
  courseId: string = '';
  courseTitle: string = '';
  courseDescription: string = '';
  courseDuration: string = '';

  constructor(private location: Location, private coursesService: CoursesService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.course = this.coursesService.getCourseById(id);
      this.courseId = this.course?.id ?? '';
      this.courseTitle = this.course?.title ?? '';
      this.courseDescription = this.course?.description ?? '';
      this.courseDuration = this.course?.duration.toString() ?? '';
    }
  }

  onSaveClick() {
    this.coursesService.updateCourse(
      {
        creationDate: '',
        ...this.course,
        id: this.courseId,
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
