import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedocPharmaComponent } from './medoc-pharma.component';

describe('MedocPharmaComponent', () => {
  let component: MedocPharmaComponent;
  let fixture: ComponentFixture<MedocPharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedocPharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedocPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
