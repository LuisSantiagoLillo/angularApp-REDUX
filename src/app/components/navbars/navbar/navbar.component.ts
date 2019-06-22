import { Component, OnInit } from '@angular/core';
// REDUX NGRX
import { Store } from '@ngrx/store';
import { State } from '../../../store/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sidebarVisible: boolean;

  constructor(
    public store: Store<State>
  ) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.sidebarVisible = state.globalSettings.sidebarVisible;
    });
  }
}
