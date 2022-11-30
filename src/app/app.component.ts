import { Component } from '@angular/core';
import { Course, ListOrder } from './types/types';
import { courses } from 'src/mocks/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-course';
  courses?: Course[] = courses;
  searchText?: string;
  order?: ListOrder;

  onFetchApi() {
    this.courses = courses;
  }

  onSearchClick(event: string) {
    this.searchText = event;
  }

  onChangeOrder(event: ListOrder) {
    this.order = event;
  }
}
