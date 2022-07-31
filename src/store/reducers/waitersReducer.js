import { ACTION_WAITERS_FILTER, ACTION_WAITERS_GET } from "../actions/waiters";

const initialState = {
    waiters: [],
};
function waitersReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_WAITERS_GET:
            return {
                ...state,
                waiters: payload,
            };
        case ACTION_WAITERS_FILTER:
            return {
                ...state,
                waiters: state.waiters.map((waiter) => {
                    if (
                        payload.tableId === waiter.tableId &&
                        payload.waiterId === ""
                    ) {
                        return { ...waiter, isSelected: false, tableId: 0 };
                    }
                    if (waiter.id === payload.waiterId) {
                        return {
                            ...waiter,
                            isSelected: true,
                            tableId: payload.tableId,
                        };
                    }
                    return waiter;
                }),
            };

        default:
            return state;
    }
}

export default waitersReducer;
