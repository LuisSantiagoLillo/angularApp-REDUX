import { Component, OnInit, Inject } from '@angular/core';
// REDUX NGRX
import { Store } from '@ngrx/store';
import { GlobalSettings } from './store/actions/globalSettings.actions';
import { State } from './store/index';
// NGX TRANSLATE CORE
import {TranslateService} from '@ngx-translate/core';
// DOCUMENT
import { DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Your personal IA';
  language: string = '';
  theme = {
    themeUrl: '',
    color: ''
  };
  globalSettings: GlobalSettings;

  constructor(
      public store: Store<State>,
      public translate: TranslateService,
      @Inject(DOCUMENT) private _document
    ) {}

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.globalSettings = state.globalSettings;
      if (state.globalSettings.languague !== this.language) {
        this.storeLanguague(state.globalSettings.languague);
        this.changeLanguague();
      } else {
        if (state.globalSettings.theme.color !== this.theme.color) {
          this.storeTheme(state.globalSettings.theme.color);
          this.changeTheme();
        } else {
          this.storeUISettings();
          this.storeVisibleSide();
        }
      }
    });
  }

  // LANGUAGUE
  storeLanguague(language: string): void {
    this.translate.use(language);
    this.language = language;
    localStorage.setItem('language_settings', this.language);
  }

  changeLanguague(): void {
    this.translate.setDefaultLang(this.language);
  }

  // THEME
  storeTheme(theme_color: string): void {
    const color = theme_color;
    const themeUrl = `assets/theme/${theme_color}.css`;
    this.theme = {
      themeUrl: themeUrl,
      color: color
    };
    this.changeTheme();
    localStorage.setItem('theme_settings', JSON.stringify(this.theme));
  }

  changeTheme(): void {
    this._document.getElementById('theme').setAttribute('href', this.theme.themeUrl);
  }

  // SIDE VISIBLE
  storeVisibleSide(): void {
    localStorage.setItem('visibleSidebar_settings', JSON.stringify(this.globalSettings.sidebarVisible));
  }

  // UI SETTINGS
  storeUISettings(): void {
    localStorage.setItem('ui_settings', JSON.stringify(this.globalSettings.uiSetiings));
  }




}
