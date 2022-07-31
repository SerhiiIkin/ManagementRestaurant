import Api from "./Api";

export const ACTION_WAITERS_GET = "ACTION_WAITERS_GET";
export const ACTION_WAITERS_FILTER = "ACTION_WAITERS_FILTER";

export function getWaiters() {
    return (dispatch) => {
        Api.getWaiters().then((waiter) => {
            return dispatch({ type: ACTION_WAITERS_GET, payload: waiter });
        });
    };
}

export function filterWaiters(tableId,waiterId) {
    return {
        type: ACTION_WAITERS_FILTER,
        payload: {tableId,waiterId},
    };
}
