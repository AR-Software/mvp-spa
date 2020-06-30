import { CHANGE_HEADER } from './appActions';
import { ReduxConstants } from './reduxConstants';


export default function AppReducer(state = ReduxConstants.DEFAULT_STATE, action) {
    action = action ? action : ReduxConstants.DEFAULT_STATE

    switch (action.type) {
        case CHANGE_HEADER:
            console.log(state, action.headerAppearance)

            return {
                ...state, 
                headerAppearance: action.headerAppearance
            };

        default:
        return state
    }
}