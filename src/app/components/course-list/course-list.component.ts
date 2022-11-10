import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Course } from '../../types/types';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit, OnChanges {
  @Input() courses?: Course[];
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

  ngOnInit(): void {
    console.log();
  }
}
