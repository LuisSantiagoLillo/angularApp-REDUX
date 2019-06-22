import * as fromAuthActions from '../actions/auth.actions';

export interface AuthState {
    user: fromAuthActions.User;
}

const stateInitial: AuthState = {
    user: null
};

export function authReducer(
    state = stateInitial,
    action: fromAuthActions.Actions
): AuthState {
    switch (action.type) {
        case fromAuthActions.SET_USER:
            return stateInitial;

        case fromAuthActions.UNSET_USER:
            return stateInitial;

        default: return state;
    }
}

