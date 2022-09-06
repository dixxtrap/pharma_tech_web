import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedocListComponent } from './medoc-list.component';

describe('MedocListComponent', () => {
  let component: MedocListComponent;
  let fixture: ComponentFixture<MedocListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedocListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
