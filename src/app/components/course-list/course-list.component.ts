import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Course, ListOrder } from '../../types/types';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnChanges {
  @Input() courses?: Course[];
  @Input() order?: ListOrder;
  @Input() searchText?: string;
  @Output() coursesChange = new EventEmitter<Course[]>();

  constructor() {}

  onDeleteCard(event: string) {
    console.log('Card deleted. The ID:', event);
    this.courses = this.courses?.filter((item) => item.id !== event);
    this.coursesChange.emit(this.courses);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CourseList changes:', changes);
  }

  trackByCourses(index: number, course: Course): string {
    return course.id;
  }
}
