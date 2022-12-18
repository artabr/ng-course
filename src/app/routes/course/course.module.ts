import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { EditCoursePageComponent } from '../../components/edit-course-page/edit-course-page.component';

@NgModule({
  declarations: [EditCoursePageComponent],
  imports: [CommonModule, CourseRoutingModule],
})
export class CourseModule {}
