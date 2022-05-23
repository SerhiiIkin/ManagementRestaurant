import { ACTION_TABLE_GET, ACTION_TABLE_SUM } from "../actions/table";

const initialState = {
    tables: [],
};
function tablesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_TABLE_GET:
            return { ...state, tables: payload };
        case ACTION_TABLE_SUM:
            return {
                ...state,
                tables: state.tables.map((table) => {
                    if (table.id === payload.id) {
                        return {
                            ...table,
                            ...payload,
                        };
                    }
                    return table
                }),
            };

        default:
            return state;
    }
}

export default tablesReducer;
