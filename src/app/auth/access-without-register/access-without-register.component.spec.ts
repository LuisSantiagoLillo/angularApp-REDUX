import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessWithoutRegisterComponent } from './access-without-register.component';

describe('AccessWithoutRegisterComponent', () => {
  let component: AccessWithoutRegisterComponent;
  let fixture: ComponentFixture<AccessWithoutRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessWithoutRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessWithoutRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
