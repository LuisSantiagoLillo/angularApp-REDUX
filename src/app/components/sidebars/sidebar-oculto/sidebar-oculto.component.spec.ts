import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOcultoComponent } from './sidebar-oculto.component';

describe('SidebarOcultoComponent', () => {
  let component: SidebarOcultoComponent;
  let fixture: ComponentFixture<SidebarOcultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarOcultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarOcultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
