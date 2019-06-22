import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

// GlobalSettings
import { GlobalSettings } from './actions/globalSettings.actions';
import * as fromGlobalSettings from './reducers/globalSettings.reducer';

// SidebarOptions
import { OptionsSideBar } from './actions/sidebar.actions';
import * as fromOptionsSidebar from './reducers/sidebar.reducer';

// Auth
import * as fromAuth from './reducers/auth.reducer';

export interface State {
  globalSettings: GlobalSettings;
  optionsSidebar: OptionsSideBar[];
  authentication: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State> = {
  globalSettings: fromGlobalSettings.globalSettingsReducer,
  optionsSidebar: fromOptionsSidebar.optionsSidebarReducer,
  authentication: fromAuth.authReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
