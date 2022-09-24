import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePharmaComponent } from './home-page-pharma.component';

describe('HomePagePharmaComponent', () => {
  let component: HomePagePharmaComponent;
  let fixture: ComponentFixture<HomePagePharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePagePharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagePharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
