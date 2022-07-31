import Api from "./Api";

export const ACTION_MENU_GET = "ACTION_MENU_GET";

export function getMenu() {
    return (dispatch) => {
        Api.getTables().then((menu) => {
            return dispatch({ type: ACTION_MENU_GET, payload:  menu[0].menu });
        });
    };
}
