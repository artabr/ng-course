import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { first } from 'rxjs';
import { Course } from '../../types/types';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  const course: Course = {
    id: '1',
    title: 'Title',
    creationDate: '1000',
    duration: 100,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the deleteCard event when clicked', () => {
    const comp = new CourseCardComponent();
    comp.course = course;

    comp.deleteCard.pipe(first()).subscribe((deletedCard) => expect(deletedCard).toBe(course.id));
    comp.onDeleteClick();
  });

  it('should correctly render the passed @Input `course` value', () => {
    component.course = course;

    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerHTML).toContain('Title');
  });

  it('should test the emitter with a Jasmine spy', () => {
    spyOn(component.deleteCard, 'emit');
    component.course = course;

    const button = fixture.nativeElement.querySelector('.testSelector');
    button.click();

    expect(component.deleteCard.emit).toHaveBeenCalledWith('1');
  });
});
