import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPetsListCardComponent } from './my-pets-list-card.component';

describe('MyPetsListCardComponent', () => {
  let component: MyPetsListCardComponent;
  let fixture: ComponentFixture<MyPetsListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPetsListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPetsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
