import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarReducedComponent } from './sidebar-reduced.component';

describe('SidebarReducedComponent', () => {
  let component: SidebarReducedComponent;
  let fixture: ComponentFixture<SidebarReducedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarReducedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarReducedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
