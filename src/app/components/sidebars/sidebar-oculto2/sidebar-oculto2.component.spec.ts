import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOculto2Component } from './sidebar-oculto2.component';

describe('SidebarOculto2Component', () => {
  let component: SidebarOculto2Component;
  let fixture: ComponentFixture<SidebarOculto2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarOculto2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarOculto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
