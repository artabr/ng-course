import { Component, OnInit } from '@angular/core';
import { Course, ListOrder } from './types/types';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-course';
  courses?: Course[] = [];
  searchText?: string;
  order?: ListOrder;
  route: 'main' | 'new-course' = 'main';

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  onAddCourse() {
    this.route = 'new-course';
  }

  onCancelAddCourse() {
    this.route = 'main';
  }

  onFetchApi() {
    console.log(this.coursesService.getCourses());
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
