import Api from "./Api";

export const ACTION_TABLE_GET = "ACTION_TABLE_GET";
export const ACTION_TABLE_SUM = "ACTION_TABLE_SUM";
export const ACTION_TABLE_RESET = "ACTION_TABLE_RESET";
export const ACTION_TABLE_SET_CHECKBOX = "ACTION_TABLE_SET_CHECKBOX";
export const ACTION_TABLE_SET_DATA = "ACTION_TABLE_SET_DATA";
export const ACTION_TABLE_MULTI = "ACTION_TABLE_MULTI";
export const ACTION_TABLE_GET_ERROR = "ACTION_TABLE_GET_ERROR";
export const ACTION_TABLE_FETCHING = "ACTION_TABLE_FETCHING";

export function getTablesList() {
    return (dispatch) => {
        Api().then((tablesServer) => {
            return dispatch({
                type: ACTION_TABLE_GET,
                payload: tablesServer[0].tables,
            });
        });
    };
}

export function fetching() {
    return { type: ACTION_TABLE_FETCHING };
}

export function fetchingError(message) {
    console.log(message);
    return { type: ACTION_TABLE_GET_ERROR, payload: message };
}

export function addOrSub(id, row, isSelected) {
    return { type: ACTION_TABLE_SUM, payload: { id, row, isSelected } };
}

export function multi(tableId, row, quantity) {
    return { type: ACTION_TABLE_MULTI, payload: { tableId, row, quantity } };
}

export function resetBill(id) {
    return { type: ACTION_TABLE_RESET, payload: id };
}

export function changeStatusCheckbox(tableId, nameRow) {
    return {
        type: ACTION_TABLE_SET_CHECKBOX,
        payload: { tableId, nameRow },
    };
}

export function setData(tableId, row, quantity) {
    return {
        type: ACTION_TABLE_SET_DATA,
        payload: { tableId, row, quantity },
    };
}
