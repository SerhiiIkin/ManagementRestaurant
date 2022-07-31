import Api from "./Api";

export const ACTION_MENU_GET = "ACTION_MENU_GET";

export function getMenu() {
    return (dispatch) => {
        Api.getMenu().then((menu) => {
            return dispatch({ type: ACTION_MENU_GET, payload: menu });
        });
    };
}
