import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPharmaComponent } from './button-pharma.component';

describe('ButtonPharmaComponent', () => {
  let component: ButtonPharmaComponent;
  let fixture: ComponentFixture<ButtonPharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
