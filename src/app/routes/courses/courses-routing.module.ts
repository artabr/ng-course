import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListPageComponent } from '../../components/course-list-page/course-list-page.component';
import { AuthGuardService } from '../../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'courses',
    component: CourseListPageComponent,
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
export class CoursesRoutingModule {}
