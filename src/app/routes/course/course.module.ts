import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { EditCoursePageComponent } from '../../components/edit-course-page/edit-course-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditCoursePageComponent],
  imports: [CommonModule, CourseRoutingModule, FormsModule],
})
export class CourseModule {}
