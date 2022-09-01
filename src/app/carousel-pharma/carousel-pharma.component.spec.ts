import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPharmaComponent } from './carousel-pharma.component';

describe('CarouselPharmaComponent', () => {
  let component: CarouselPharmaComponent;
  let fixture: ComponentFixture<CarouselPharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
