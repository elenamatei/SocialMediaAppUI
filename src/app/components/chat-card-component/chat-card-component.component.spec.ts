import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCardComponentComponent } from './chat-card-component.component';

describe('ChatCardComponentComponent', () => {
  let component: ChatCardComponentComponent;
  let fixture: ComponentFixture<ChatCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
