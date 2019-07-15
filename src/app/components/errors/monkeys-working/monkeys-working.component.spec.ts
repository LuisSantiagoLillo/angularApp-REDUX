import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeysWorkingComponent } from './monkeys-working.component';

describe('MonkeysWorkingComponent', () => {
  let component: MonkeysWorkingComponent;
  let fixture: ComponentFixture<MonkeysWorkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeysWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeysWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
