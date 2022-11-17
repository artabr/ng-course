import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { Course } from '../../types/types';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  const course: Course = {
    id: '1',
    title: 'Title',
    creationDate: '1000',
    duration: 100,
  };
  const courses = [course];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete course when fired onDeleteCard', () => {
    const comp = new CourseListComponent();
    const mockEvent = '1';
    comp.courses = courses;

    comp.onDeleteCard(mockEvent);

    expect(comp.courses).toEqual([]);
  });
});
