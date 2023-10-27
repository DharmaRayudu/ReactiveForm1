import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeValidationsComponent } from './custome-validations.component';

describe('CustomeValidationsComponent', () => {
  let component: CustomeValidationsComponent;
  let fixture: ComponentFixture<CustomeValidationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomeValidationsComponent]
    });
    fixture = TestBed.createComponent(CustomeValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
