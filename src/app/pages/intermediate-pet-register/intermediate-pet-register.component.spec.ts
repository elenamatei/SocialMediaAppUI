import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediatePetRegisterComponent } from './intermediate-pet-register.component';

describe('IntermediatePetRegisterComponent', () => {
  let component: IntermediatePetRegisterComponent;
  let fixture: ComponentFixture<IntermediatePetRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermediatePetRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediatePetRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
