import TableApi from "./TableApi";

export const ACTION_TABLE_GET = "ACTION_TABLE_GET";
export const ACTION_TABLE_SUM = "ACTION_TABLE_SUM";

export function getTablesList() {
    return (dispatch) => {
        TableApi.getList().then((tablesServer) => {
            return dispatch({ type: ACTION_TABLE_GET, payload: tablesServer });
        });
    };
}

export function addOrSub(price, table) {
    const newDataTable = {
        ...table,
        sumBill: +table.sumBill + +price,
    };

    return (dispatch) => {
        TableApi.update(table.id, newDataTable).then((tablesServer) => {
            return dispatch({ type: ACTION_TABLE_SUM, payload: tablesServer });
        });
    };
}
