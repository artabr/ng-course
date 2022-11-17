import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';
import { first } from 'rxjs';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the searchTextChange event when clicked', () => {
    const comp = new SearchbarComponent();
    comp.inputText = 'emittedSearchText';

    comp.searchTextChange
      .pipe(first())
      .subscribe((emittedSearchTextChange) => expect(emittedSearchTextChange).toBe('emittedSearchText'));
    comp.onInputText();
  });

  it('adds to consoleText event when clicked', () => {
    const comp = new SearchbarComponent();
    const mockText = 'text';
    comp.inputText = mockText;

    comp.onSearchClick();

    expect(comp.consoleText).toBe(`Input text is: ${mockText}`);
  });
});
