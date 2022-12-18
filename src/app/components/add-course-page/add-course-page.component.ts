import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
})
export class AddCoursePageComponent {
  constructor(private location: Location) {}

  onCancelClick() {
    this.location.back();
  }
}
