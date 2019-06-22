import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGradientComponent } from './navbar-gradient.component';

describe('NavbarGradientComponent', () => {
  let component: NavbarGradientComponent;
  let fixture: ComponentFixture<NavbarGradientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarGradientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
