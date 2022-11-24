import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderSwitcherComponent } from './components/order-switcher/order-switcher.component';
import { NoCoursesComponent } from './components/no-courses/no-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    CourseCardComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    CourseListComponent,
    LoadMoreComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    OrderSwitcherComponent,
    NoCoursesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
