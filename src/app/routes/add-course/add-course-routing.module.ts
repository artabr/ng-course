import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursePageComponent } from '../../components/add-course-page/add-course-page.component';
import { AuthGuardService } from '../../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'courses/new',
    component: AddCoursePageComponent,
    data: {
      breadcrumb: 'Add new course',
    },
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCourseRoutingModule {}
