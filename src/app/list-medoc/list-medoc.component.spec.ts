import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedocComponent } from './list-medoc.component';

describe('ListMedocComponent', () => {
  let component: ListMedocComponent;
  let fixture: ComponentFixture<ListMedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
