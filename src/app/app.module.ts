import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Drag & Drop ************************************************ //
import { DragDropModule } from '@angular/cdk/drag-drop';

// REDUX - NGRX ********************************************** //
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// *********************************************************** //
import { environment } from '../environments/environment';
// TRANSLATE SERVICE from NGRX Translate
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// PAGES
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';

// COMPONENTS
import { NavbarComponent } from './components/navbars/navbar/navbar.component';
import { ChangeThemeComponent } from './components/change-theme/change-theme.component';
import { ChangeLanguagueComponent } from './components/change-languague/change-languague.component';
import { SidebarComponent } from './components/sidebars/sidebar/sidebar.component';
import { SidebarReducedComponent } from './components/sidebars/sidebar-reduced/sidebar-reduced.component';
import { NavbarGradientComponent } from './components/navbars/navbar-gradient/navbar-gradient.component';
import { SidebarCircularComponent } from './components/sidebars/sidebar-circular/sidebar-circular.component';
import { SidebarOcultoComponent } from './components/sidebars/sidebar-oculto/sidebar-oculto.component';
import { SidebarOculto2Component } from './components/sidebars/sidebar-oculto2/sidebar-oculto2.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthFirebaseComponent } from './auth/auth-firebase/auth-firebase.component';
import { SidebarVisibleButtonComponent } from './components/sidebar-visible-button/sidebar-visible-button.component';
import { Login2Component } from './auth/login2/login2.component';
import { NubeLoginComponent } from './auth/nube-login/nube-login.component';
import { AccessWithoutRegisterComponent } from './auth/access-without-register/access-without-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChangeThemeComponent,
    ChangeLanguagueComponent,
    SidebarComponent,
    SidebarReducedComponent,
    NavbarGradientComponent,
    SidebarCircularComponent,
    HomeComponent,
    SettingsComponent,
    SidebarOcultoComponent,
    SidebarOculto2Component,
    LoginComponent,
    RegisterComponent,
    AuthFirebaseComponent,
    SidebarVisibleButtonComponent,
    Login2Component,
    NubeLoginComponent,
    AccessWithoutRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule, // Drag&Drop
    // Translate NGRX
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // REDUX - NGRX ********************************************** //
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    // *********************************************************** //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
