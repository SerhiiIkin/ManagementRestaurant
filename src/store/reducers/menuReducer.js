import { ACTION_MENU_GET } from "../actions/menu";

const initialState = {
    menu: [],
};
function menuReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_MENU_GET:
            return {
                ...state,
                menu: payload,
            };

        default:
            return state;
    }
}

export default menuReducer;
