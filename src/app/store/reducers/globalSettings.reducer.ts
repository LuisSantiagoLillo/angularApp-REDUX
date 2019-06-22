import * as fromGlobalSettings from '../actions/globalSettings.actions';


const stateInitial: fromGlobalSettings.GlobalSettings = {
    languague: 'en',
    theme: {
        themeUrl: 'assets/theme/default.css',
        color: 'default'
    },
    sidebarVisible: true,
    uiSetiings: {
        navbar: {
            navbarSimple1: {
                name: 'navbarSimple1',
                activated: false
            },
            navbarGradient1: {
                name: 'navbarGradient1',
                activated: true
            }
        },
        sidebar: {
            sidebarSimple1: {
                name: 'sidebarSimple1',
                activated: false
            },
            sidebarCircular1: {
                name: 'sidebarCircular1',
                activated: true
            },
            sidebarReduced1: {
                name: 'sidebarReduced1',
                activated: false
            },
            sidebarHide1: {
                name: 'sidebarHide1',
                activated: false
            },
            sidebarHide2: {
                name: 'sidebarHide2',
                activated: false
            }
        }
    }
};
loadLanguague();
loadTheme();
loadUI();
loadVisibleSidebar();

export function globalSettingsReducer(
    state = stateInitial,
    action: fromGlobalSettings.Actions
): fromGlobalSettings.GlobalSettings {
    switch (action.type) {
        case fromGlobalSettings.SET_LANGUAGUE:
            stateInitial.languague = action.lng;
            return stateInitial;

        case fromGlobalSettings.SET_THEME:
            stateInitial.theme.themeUrl = action.themeUrl;
            stateInitial.theme.color = action.color;
            return stateInitial;

        case fromGlobalSettings.SET_VISIBLE_SIDEBAR:
            stateInitial.sidebarVisible = action.visible;
            return stateInitial;

        case fromGlobalSettings.SET_NAVBAR:
            setNavbar(action.nameNavbar);
            return stateInitial;

        case fromGlobalSettings.SET_SIDEBAR:
            setSidebar(action.nameSidebar);
            return stateInitial;

        default: return state;
    }
}



  // ************************************************************ //
  // LOAD SETTINGS from LocalStore
  function loadLanguague(): void {
    if (localStorage.getItem('language_settings')) {
      stateInitial.languague = localStorage.getItem('language_settings');
    } else {
      stateInitial.languague = 'en';
    }
}

function loadTheme(): void {
    if (localStorage.getItem('theme_settings')) {
      stateInitial.theme = JSON.parse(localStorage.getItem('theme_settings'));
    }
}

function loadVisibleSidebar(): void {
    if (localStorage.getItem('visibleSidebar_settings')) {
      stateInitial.sidebarVisible = JSON.parse(localStorage.getItem('visibleSidebar_settings'));
    }
}

function loadUI(): void {
    if (localStorage.getItem('ui_settings')) {
      stateInitial.uiSetiings = JSON.parse(localStorage.getItem('ui_settings'));
    }
}

  // ************************************************************ //
// UTILS
function setNavbar(name) {
    stateInitial.uiSetiings.navbar.navbarGradient1.name === name ? stateInitial.uiSetiings.navbar.navbarGradient1.activated = true : stateInitial.uiSetiings.navbar.navbarGradient1.activated = false;
    stateInitial.uiSetiings.navbar.navbarSimple1.name === name ? stateInitial.uiSetiings.navbar.navbarSimple1.activated = true : stateInitial.uiSetiings.navbar.navbarSimple1.activated = false;
}

function setSidebar(name) {
    stateInitial.uiSetiings.sidebar.sidebarCircular1.name === name ? stateInitial.uiSetiings.sidebar.sidebarCircular1.activated = true : stateInitial.uiSetiings.sidebar.sidebarCircular1.activated = false;
    stateInitial.uiSetiings.sidebar.sidebarReduced1.name === name ? stateInitial.uiSetiings.sidebar.sidebarReduced1.activated = true : stateInitial.uiSetiings.sidebar.sidebarReduced1.activated = false;
    stateInitial.uiSetiings.sidebar.sidebarSimple1.name === name ? stateInitial.uiSetiings.sidebar.sidebarSimple1.activated = true : stateInitial.uiSetiings.sidebar.sidebarSimple1.activated = false;
    stateInitial.uiSetiings.sidebar.sidebarHide1.name === name ? stateInitial.uiSetiings.sidebar.sidebarHide1.activated = true : stateInitial.uiSetiings.sidebar.sidebarHide1.activated = false;
    stateInitial.uiSetiings.sidebar.sidebarHide2.name === name ? stateInitial.uiSetiings.sidebar.sidebarHide2.activated = true : stateInitial.uiSetiings.sidebar.sidebarHide2.activated = false;

}
