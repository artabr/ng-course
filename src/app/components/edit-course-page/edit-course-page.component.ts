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

  constructor(private location: Location, private coursesService: CoursesService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.course = this.coursesService.getCourseById(id);
  }

  onCancelClick() {
    this.location.back();
  }
}
