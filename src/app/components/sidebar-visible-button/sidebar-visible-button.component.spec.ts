import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarVisibleButtonComponent } from './sidebar-visible-button.component';

describe('SidebarVisibleButtonComponent', () => {
  let component: SidebarVisibleButtonComponent;
  let fixture: ComponentFixture<SidebarVisibleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarVisibleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarVisibleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
