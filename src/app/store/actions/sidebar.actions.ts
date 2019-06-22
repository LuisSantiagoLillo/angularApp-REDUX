import { Action } from '@ngrx/store';

export const SET_ORDER_SIDEBAR = '[SIDEBAR] Set order sitebar';

export class SetOrderSidebar implements Action {
    readonly type = SET_ORDER_SIDEBAR;
    constructor(public optionsSidebar: OptionsSideBar[]) {}
}


export type Actions = SetOrderSidebar;


export interface OptionsSideBar {
    text: string;
    notifications: string;
    icon: string;
    href: string;
    visible: boolean;
  }
