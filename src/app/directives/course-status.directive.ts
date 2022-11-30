import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCourseStatus]',
})
export class CourseStatusDirective {
  constructor(private element: ElementRef) {}

  @Input() set creationDate(date: string) {
    if (Date.parse(date) < Date.now() && Date.parse(date) >= Date.now() - new Date(0).setDate(14)) {
      this.element.nativeElement.style.borderColor = 'green';
    }

    if (Date.parse(date) > Date.now()) {
      this.element.nativeElement.style.borderColor = 'blue';
    }
  }
}
