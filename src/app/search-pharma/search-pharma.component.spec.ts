import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPharmaComponent } from './search-pharma.component';

describe('SearchPharmaComponent', () => {
  let component: SearchPharmaComponent;
  let fixture: ComponentFixture<SearchPharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
