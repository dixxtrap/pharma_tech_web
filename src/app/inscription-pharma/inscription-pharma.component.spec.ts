import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPharmaComponent } from './inscription-pharma.component';

describe('InscriptionPharmaComponent', () => {
  let component: InscriptionPharmaComponent;
  let fixture: ComponentFixture<InscriptionPharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionPharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
