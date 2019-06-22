import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCircularComponent } from './sidebar-circular.component';

describe('SidebarCircularComponent', () => {
  let component: SidebarCircularComponent;
  let fixture: ComponentFixture<SidebarCircularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCircularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
