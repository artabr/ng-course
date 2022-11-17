import { Component } from '@angular/core';
import { Course } from './types/types';
import { courses } from 'src/mocks/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-course';
  defaultSearchText?: string;
  courses?: Course[];

  onFetchApi() {
    this.courses = courses;
  }
}
