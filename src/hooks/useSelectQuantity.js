import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { multi, setData } from "../store/actions/table";

function useSelectQuantity(table, row) {
    const [quantity, setQuantity] = useState("");
    const dispatch = useDispatch();

    useMemo(() => {
        if (table.rowData.length === 0) {
            setQuantity("");
        } else {
            table.rowData.forEach((el) => {
                if (el.name === row?.name) {
                    setQuantity(el.quantity);
                }
            });
        }
        // eslint-disable-next-line
    }, [row?.name, table.rowData, table.rowData.length]);

    function handleChange(e) {
        dispatch(multi(table.id, row, e.target.value));
        dispatch(setData(table.id, row, e.target.value));

        table.rowData.forEach((el) => {
            if (el.name === row.name) {
                setQuantity(el.quantity);
            }
        });
    }

    return { quantity, handleChange, setQuantity };
}

export default useSelectQuantity;
