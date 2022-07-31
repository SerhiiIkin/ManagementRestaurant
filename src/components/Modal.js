import { resetBill } from "../store/actions/table";
import { useDispatch } from "react-redux";
import "./Modal.scss";

function Modal({ table, setModal }) {
    const getSelectedRows = table.checkBoxes.map((el) =>
        table.rowData.find((item) => item.name === el)
    );

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(resetBill(table.id));
        setModal(false);
        document.body.style.overflow = "";
    };
    return (
        <div className="modal" onClick={handleClick}>
            <div className="modal__container">
                <h2>Info om bill</h2>
                <p>Sum of table check : {table.sumCheck} $</p>
                <ul>
                    <li>Your orders: </li>
                    {getSelectedRows.map((row) => (
                        <li key={row.name}>
                            {row.name} : {row.quantity} stk
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Modal;
