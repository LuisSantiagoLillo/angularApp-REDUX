import { Component, OnInit } from '@angular/core';
// REDUX NGRX
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { SetTheme } from '../../store/actions/globalSettings.actions';
@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.css']
})
export class ChangeThemeComponent implements OnInit {

  constructor( public store: Store<State>) { }

  ngOnInit() {
  }

  storeTheme(theme_color: string): void {
    const themeUrl = `assets/theme/${theme_color}.css`;
    this.store.dispatch(new SetTheme(themeUrl, theme_color));
  }

}
