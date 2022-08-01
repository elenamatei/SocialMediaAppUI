import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPetProfileComponent } from './edit-pet-profile.component';

describe('EditPetProfileComponent', () => {
  let component: EditPetProfileComponent;
  let fixture: ComponentFixture<EditPetProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPetProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
