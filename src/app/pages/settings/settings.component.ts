import { Component, OnInit } from '@angular/core';
// REDUX NGRX
import { Store } from '@ngrx/store';
import { State } from '../../store/index';
import { SetNavbar, SetSidebar} from '../../store/actions/globalSettings.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    public store: Store<State>
  ) { }

  ngOnInit() {
  }
  changeNavbar(nameNavbar: string) {
    this.store.dispatch(new SetNavbar(nameNavbar, true));
  }

  changeSidebar(nameSidebar: string) {
    this.store.dispatch(new SetSidebar(nameSidebar, true));
  }
}
