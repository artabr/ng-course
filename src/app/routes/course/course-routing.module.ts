import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCoursePageComponent } from '../../components/edit-course-page/edit-course-page.component';
import { AuthGuardService } from '../../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'courses/:id',
    component: EditCoursePageComponent,
    data: {
      breadcrumb: 'Courses',
    },
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
