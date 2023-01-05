import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCourseRoutingModule } from './add-course-routing.module';
import { AddCoursePageComponent } from '../../components/add-course-page/add-course-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddCoursePageComponent],
  imports: [CommonModule, AddCourseRoutingModule, FormsModule],
  exports: [AddCoursePageComponent],
})
export class AddCourseModule {}
