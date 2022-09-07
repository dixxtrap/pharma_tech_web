import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPharmaComponent } from './footer-pharma.component';

describe('FooterPharmaComponent', () => {
  let component: FooterPharmaComponent;
  let fixture: ComponentFixture<FooterPharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
