import * as fromSidebarActions from '../actions/sidebar.actions';

let stateInitial: fromSidebarActions.OptionsSideBar[] = [
      {
        text: 'sidebar.main',
        notifications: '4',
        icon: 'fas fa-home',
        href: 'home',
        visible: true
      },
      {
        text: 'sidebar.settings',
        notifications: '',
        icon: 'fas fa-cog',
        href: 'settings',
        visible: true
      },
      {
        text: 'sidebar.calendar',
        notifications: '',
        icon: 'fas fa-calendar-alt',
        href: 'calendar',
        visible: true
      },

      {
        text: 'sidebar.tools',
        notifications: '',
        icon: 'fas fa-tools',
        href: '#',
        visible: true
      },
      {
        text: 'sidebar.weather',
        notifications: '',
        icon: 'fas fa-sun',
        href: '#',
        visible: true
      },
      {
        text: 'sidebar.crypto',
        notifications: '',
        icon: 'fab fa-bitcoin',
        href: '#',
        visible: true
      }
];
loadOptions();


export function optionsSidebarReducer(
    state = stateInitial,
    action: fromSidebarActions.Actions
): fromSidebarActions.OptionsSideBar[] {
    switch (action.type) {
        case fromSidebarActions.SET_ORDER_SIDEBAR:
            stateInitial = action.optionsSidebar;
            saveOptions(action.optionsSidebar);
            return stateInitial;
        default: return state;
    }
}

// ************************************************************ //
function loadOptions() {
    if (localStorage.getItem('sidebarOptions')) {
        stateInitial =  JSON.parse(localStorage.getItem('sidebarOptions'));
    }
  }

function saveOptions(options) {
    localStorage.setItem('sidebarOptions', JSON.stringify(options));
}
