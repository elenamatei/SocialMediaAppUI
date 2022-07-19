import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPetsPageComponent } from './my-pets-page.component';

describe('MyPetsPageComponent', () => {
  let component: MyPetsPageComponent;
  let fixture: ComponentFixture<MyPetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPetsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
