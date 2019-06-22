import { Action } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

export const SET_LANGUAGUE = '[APP] Set global languague';
export const SET_THEME = '[APP] Set global theme';
export const SET_VISIBLE_SIDEBAR = '[APP] Set visible sidebar';
export const SET_NAVBAR = '[APP] Set Navbar';
export const SET_SIDEBAR = '[APP] Set Sidebar';

export class SetLanguague implements Action {
    readonly type = SET_LANGUAGUE;
    constructor(public lng: string) {}
}

export class SetTheme implements Action {
    readonly type = SET_THEME;
    constructor(public themeUrl: string, public color: string) {}
}

export class SetNavbar implements Action {
    readonly type = SET_NAVBAR;
    constructor(public nameNavbar: string, public activate: boolean) {}
}

export class SetVisibleSidebar implements Action {
    readonly type = SET_VISIBLE_SIDEBAR;
    constructor(public visible: boolean) {}
}

export class SetSidebar implements Action {
    readonly type = SET_SIDEBAR;
    constructor(public nameSidebar: string, public activate: boolean) {}
}

export type Actions = SetLanguague |
                        SetTheme   |
                        SetVisibleSidebar |
                        SetNavbar |
                        SetSidebar;


export interface GlobalSettings {
    languague: string;
    theme: {
        themeUrl: string,
        color: string
    };
    sidebarVisible: boolean;
    uiSetiings: UISettings;
}

/**
 * TODO
 */
export interface UISettings {
    navbar: {
        navbarSimple1: {
            name: 'navbarSimple1',
            activated: boolean
        },
        navbarGradient1: {
            name: 'navbarGradient1',
            activated: boolean
        }
    };
    sidebar: {
        sidebarSimple1: {
            name: 'sidebarSimple1',
            activated: boolean
        },
        sidebarCircular1: {
            name: 'sidebarCircular1',
            activated: boolean
        },
        sidebarReduced1: {
            name: 'sidebarReduced1',
            activated: boolean
        },
        sidebarHide1: {
            name: 'sidebarHide1',
            activated: boolean
        },
        sidebarHide2: {
            name: 'sidebarHide2',
            activated: boolean
        }
    };
}
