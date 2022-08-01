import {
    ACTION_TABLE_GET,
    ACTION_TABLE_SUM,
    ACTION_TABLE_RESET,
    ACTION_TABLE_SET_CHECKBOX,
    ACTION_TABLE_SET_DATA,
    ACTION_TABLE_MULTI,
    ACTION_TABLE_GET_ERROR,
} from "../actions/table";

const initialState = {
    tables: [],
    loading: false,
    error: "",
};

function tablesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_TABLE_GET:
            return { ...state, tables: payload };
        case ACTION_TABLE_GET_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case ACTION_TABLE_SET_CHECKBOX:
            return {
                ...state,
                tables: state.tables.map((table) => {
                    if (table.id === payload.tableId) {
                        if (table.checkBoxes.indexOf(payload.nameRow) >= 0) {
                            let index = table.checkBoxes.indexOf(
                                payload.nameRow
                            );

                            table.checkBoxes.splice(index, 1);
                        } else {
                            table.checkBoxes.push(payload.nameRow);
                        }
                    }
                    return table;
                }),
            };
        case ACTION_TABLE_SUM:
            return {
                ...state,
                tables: state.tables.map((table) => {
                    const findElem = table.rowData.find(
                        (el) => el.name === payload.row.name
                    );

                    if (table.id === payload.id) {
                        payload?.isSelected ? sum() : sub();
                        function sum() {
                            const newData = {
                                name: payload.row.name,
                                price: payload.row.price,
                                quantity: findElem?.quantity ?? 1,
                            };
                            if (findElem?.quantity) {
                                table.sumCheck +=
                                    payload.row.price * findElem.quantity;
                            } else {
                                table.sumCheck += payload.row.price;
                                const index = table.rowData.findIndex(
                                    (el) => el.name === payload.row.name
                                );

                                if (index === -1) {
                                    table.rowData.push(newData);
                                } else if (index >= 0) {
                                    table.rowData.splice(index, 1);
                                    table.rowData.push(newData);
                                }
                            }
                        }
                        function sub() {
                            findElem?.quantity
                                ? (table.sumCheck -=
                                      payload.row.price * findElem.quantity)
                                : (table.sumCheck -= payload.row.price);
                            table.rowData = table.rowData.filter(
                                (el) => el.name !== findElem.name
                            );
                        }
                    }
                    return table;
                }),
            };
        case ACTION_TABLE_MULTI:
            return {
                ...state,
                tables: state.tables.map((table) => {
                    if (table.id === payload.tableId) {
                        if (table.checkBoxes.length !== 0) {
                            const checkedRows = table.checkBoxes.map((el) =>
                                table.rowData.find((item) => item.name === el)
                            );
                            const checkedEL = checkedRows.find(
                                (row) => row.name === payload.row.name
                            );

                            if (checkedEL) {
                                if (payload?.quantity === "") {
                                    table.sumCheck -=
                                        checkedEL.price * checkedEL?.quantity;
                                    table.checkBoxes = table.checkBoxes.filter(
                                        (el) => el !== checkedEL.name
                                    );
                                    table.rowData = table.rowData.filter(
                                        (el) => el.name !== checkedEL.name
                                    );
                                } else {
                                    table.sumCheck +=
                                        checkedEL.price * payload.quantity -
                                        checkedEL.price * checkedEL.quantity;
                                }
                            }
                        }
                    }

                    return table;
                }),
            };
        case ACTION_TABLE_RESET:
            return {
                ...state,
                tables: state.tables.map((table) => {
                    if (table.id === payload) {
                        table.sumCheck = 0;
                        table.checkBoxes = [];
                        table.rowData = [];
                    }
                    return table;
                }),
            };
        case ACTION_TABLE_SET_DATA:
            return {
                ...state,
                tables: state.tables.map((table) => {
                    if (table.id === payload.tableId) {
                        const newData = {
                            name: payload.row.name,
                            price: payload.row.price,
                            quantity: payload.quantity,
                        };

                        const index = table.rowData.findIndex(
                            (el) => el.name === payload.row.name
                        );

                        if (index === -1) {
                            table.rowData.push(newData);
                        } else if (index >= 0) {
                            table.rowData.splice(index, 1);
                            table.rowData.push(newData);
                        }
                    }

                    return table;
                }),
            };

        default:
            return state;
    }
}

export default tablesReducer;
