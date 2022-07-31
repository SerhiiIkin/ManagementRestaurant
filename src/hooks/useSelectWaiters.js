import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterWaiters } from "../store/actions/waiters";


function useSelectWaiters(table) {
    const waiters = useSelector((state) => state.waitersReducer.waiters);
    const [waiter, setWaiter] = useState("");
    const dispatch = useDispatch()


    function handleChange(e) {
        setWaiter(e.target.value);
        dispatch(filterWaiters(table.id, e.target.value))
    }

    return { waiter, waiters, handleChange };
}

export default useSelectWaiters;
