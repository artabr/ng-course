import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../types/types';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
})
export class CourseCardComponent implements OnInit {
  @Input() course?: Course;
  @Output() deleteCard = new EventEmitter<string>();

  constructor() {}

  onDeleteClick() {
    this.deleteCard.emit(this.course?.id);
  }

  ngOnInit(): void {
    console.log();
  }
}
