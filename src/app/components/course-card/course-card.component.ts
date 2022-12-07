import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../types/types';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  @Input() course?: Course;
  @Output() deleteCard = new EventEmitter<string>();

  constructor() {}

  onDeleteClick() {
    this.deleteCard.emit(this.course?.id);
  }
}
