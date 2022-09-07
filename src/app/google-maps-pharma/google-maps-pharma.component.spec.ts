import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsPharmaComponent } from './google-maps-pharma.component';

describe('GoogleMapsPharmaComponent', () => {
  let component: GoogleMapsPharmaComponent;
  let fixture: ComponentFixture<GoogleMapsPharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapsPharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapsPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
