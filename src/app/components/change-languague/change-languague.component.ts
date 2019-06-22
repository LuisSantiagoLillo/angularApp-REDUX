import { Component, OnInit } from '@angular/core';
// REDUX NGRX
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { SetLanguague } from '../../store/actions/globalSettings.actions';

@Component({
  selector: 'app-change-languague',
  templateUrl: './change-languague.component.html',
  styleUrls: ['./change-languague.component.css']
})
export class ChangeLanguagueComponent implements OnInit {

  constructor(public store: Store<State>) { }

  ngOnInit() {
  }

  storeLanguague(language: string): void {
    this.store.dispatch(new SetLanguague(language));
  }

}
