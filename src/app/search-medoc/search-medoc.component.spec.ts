import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMedocComponent } from './search-medoc.component';

describe('SearchMedocComponent', () => {
  let component: SearchMedocComponent;
  let fixture: ComponentFixture<SearchMedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMedocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
