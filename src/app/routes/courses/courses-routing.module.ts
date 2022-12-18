import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListPageComponent } from '../../components/course-list-page/course-list-page.component';

const routes: Routes = [{ path: 'courses', component: CourseListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
