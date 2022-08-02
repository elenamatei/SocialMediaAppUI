import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaysPageComponent } from './birthdays-page.component';

describe('BirthdaysPageComponent', () => {
  let component: BirthdaysPageComponent;
  let fixture: ComponentFixture<BirthdaysPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdaysPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
