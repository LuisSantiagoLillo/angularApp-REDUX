import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLanguagueComponent } from './change-languague.component';

describe('ChangeLanguagueComponent', () => {
  let component: ChangeLanguagueComponent;
  let fixture: ComponentFixture<ChangeLanguagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLanguagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLanguagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
