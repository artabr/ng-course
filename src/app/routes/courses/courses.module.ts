import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { LoadMoreComponent } from '../../components/load-more/load-more.component';
import { NoCoursesComponent } from '../../components/no-courses/no-courses.component';
import { CourseListComponent } from '../../components/course-list/course-list.component';
import { CourseStatusDirective } from '../../directives/course-status.directive';
import { CourseListPageComponent } from '../../components/course-list-page/course-list-page.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { OrderSwitcherComponent } from '../../components/order-switcher/order-switcher.component';

// Pipes
import { DurationPipe } from '../../pipes/duration.pipe';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

@NgModule({
  declarations: [
    CourseStatusDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    CourseCardComponent,
    CourseListComponent,
    LoadMoreComponent,
    NoCoursesComponent,
    CourseListPageComponent,
    SearchbarComponent,
    OrderSwitcherComponent,
  ],
  imports: [CommonModule, CoursesRoutingModule, FormsModule, HttpClientModule],
  exports: [CourseCardComponent, CourseListComponent, LoadMoreComponent, NoCoursesComponent, CourseListPageComponent],
})
export class CoursesModule {}
