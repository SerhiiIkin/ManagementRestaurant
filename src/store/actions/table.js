import Api from "./Api";

export const ACTION_TABLE_GET = "ACTION_TABLE_GET";
export const ACTION_TABLE_SUM = "ACTION_TABLE_SUM";
export const ACTION_TABLE_RESET = "ACTION_TABLE_RESET";
export const ACTION_TABLE_SET_CHECKBOX = "ACTION_TABLE_SET_CHECKBOX";
export const ACTION_TABLE_SET_DATA = "ACTION_TABLE_SET_DATA";
export const ACTION_TABLE_MULTI = "ACTION_TABLE_MULTI";

export function getTablesList() {
    return (dispatch) => {
        Api.getTables().then((tablesServer) => {
            return dispatch({ type: ACTION_TABLE_GET, payload: tablesServer });
        });
    };
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
