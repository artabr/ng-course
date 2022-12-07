import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
})
export class AddCoursePageComponent {
  @Output() cancelClick = new EventEmitter<void>();

  constructor() {}

  onCancelClick() {
    this.cancelClick.emit();
  }
}
