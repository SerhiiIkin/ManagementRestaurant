import { alpha, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EnhancedTable from "../../components/EnhancedTable";
import style from "./Table.module.scss";
import PropTypes from "prop-types";
import Modal from "../../components/Modal";

function Table({ table }) {
    const menu = useSelector((state) => state.menuReducer.menu);
    const [modal, setModal] = useState(false);

    function onBtnCloseBillClick(e) {
        document.body.style.overflow = "hidden";
        setModal(true);
    }

    const EnhancedTableToolbar = (props) => {
        const { numSelected } = props;

        return (
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                    ...(numSelected > 0 && {
                        bgcolor: (theme) =>
                            alpha(
                                theme.palette.primary.main,
                                theme.palette.action.activatedOpacity
                            ),
                    }),
                }}>
                {numSelected > 0 ? (
                    <Typography
                        sx={{ flex: "1 1 100%" }}
                        color="inherit"
                        variant="subtitle1"
                        component="div">
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography
                        sx={{ flex: "1 1 100%" }}
                        variant="h6"
                        id="tableTitle"
                        component="div">
                        Table {table.id}
                    </Typography>
                )}
            </Toolbar>
        );
    };

    EnhancedTableToolbar.propTypes = {
        numSelected: PropTypes.number.isRequired,
    };

    return (
        <>
            <EnhancedTableToolbar numSelected={table.checkBoxes.length} />
            {menu.map((rows) => (
                <EnhancedTable key={rows.id} rows={rows} table={table} />
            ))}

            <p style={{ paddingBottom: "5px" }}>
                Check amount: {table.sumCheck || 0} $
            </p>
            <button
                style={{ marginBottom: "5px" }}
                disabled={table.sumCheck !== 0 ? false : true}
                onClick={onBtnCloseBillClick}
                className={style.btn}>
                Close bill
            </button>
            {modal && <Modal table={table} setModal={setModal} />}
        </>
    );
}

export default Table;
