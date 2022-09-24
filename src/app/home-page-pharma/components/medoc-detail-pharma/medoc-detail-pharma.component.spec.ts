import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedocDetailPharmaComponent } from './medoc-detail-pharma.component';

describe('MedocDetailPharmaComponent', () => {
  let component: MedocDetailPharmaComponent;
  let fixture: ComponentFixture<MedocDetailPharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedocDetailPharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedocDetailPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
