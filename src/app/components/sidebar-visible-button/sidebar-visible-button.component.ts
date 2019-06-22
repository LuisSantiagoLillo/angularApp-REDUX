import { Component, OnInit } from '@angular/core';
// REDUX NGRX
import { Store } from '@ngrx/store';
import { SetVisibleSidebar } from '../../store/actions/globalSettings.actions';
import { State } from '../../store/index';

@Component({
  selector: 'app-sidebar-visible-button',
  templateUrl: './sidebar-visible-button.component.html',
  styleUrls: ['./sidebar-visible-button.component.css']
})
export class SidebarVisibleButtonComponent implements OnInit {
  visible: boolean;
  constructor(
    public store: Store<State>
  ) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.visible = state.globalSettings.sidebarVisible;
    });
  }

  changeSidebarVisible(): void {
    this.visible = !this.visible;
    this.store.dispatch(new SetVisibleSidebar(this.visible));
  }

}
