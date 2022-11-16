import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMoreComponent } from './load-more.component';
import { first } from 'rxjs';

describe('LoadMoreComponent', () => {
  let component: LoadMoreComponent;
  let fixture: ComponentFixture<LoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadMoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the eventMessageText event when clicked', () => {
    const comp = new LoadMoreComponent();

    comp.eventMessageText
      .pipe(first())
      .subscribe((emittedEventMessageText) => expect(emittedEventMessageText).toBe('eventMessageText'));
    comp.onClick();
  });
});
