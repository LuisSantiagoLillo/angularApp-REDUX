import * as fromAuthActions from '../actions/auth.actions';

export interface AuthState {
    user: fromAuthActions.User;
}

const stateInitial: AuthState = {
    user: null
};
loadAuthUser();

export function authReducer(
    state = stateInitial,
    action: fromAuthActions.Actions
): AuthState {
    switch (action.type) {
        case fromAuthActions.SET_USER:
            state.user = action.user;
            return stateInitial;

        case fromAuthActions.UNSET_USER:
            state.user = null;
            return stateInitial;

        default: return state;
    }
}


function loadAuthUser(): void {
    if (localStorage.getItem('userIA')) {
        stateInitial.user = JSON.parse(localStorage.getItem('userIA'));
      }
}
