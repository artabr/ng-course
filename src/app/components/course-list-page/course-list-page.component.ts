import { Component, OnInit } from '@angular/core';
import { Course, ListOrder } from '../../types/types';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
})
export class CourseListPageComponent implements OnInit {
  searchText?: string;
  order?: ListOrder;
  courses?: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  onCourseChange() {
    this.courses = this.coursesService.getCourses();
  }

  onSearchClick(event: string) {
    this.searchText = event;
  }

  onChangeOrder(event: ListOrder) {
    this.order = event;
  }
}
