import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import style from "./App.module.css";
import SelectWaiters from "./components/SelectWaiters";
import Button from "@mui/material/Button";
import EnhancedTable from "./components/EnhancedTable";
import { useDispatch, useSelector } from "react-redux";
import TableApi from "./store/actions/TableApi";
import { getTablesList } from "./store/actions/table";

function App() {
    const dispatch = useDispatch();
    const tables = useSelector((state) => state.tables.tables);

    useEffect(() => dispatch(getTablesList()), []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {tables.map((table) => {
                    return (
                        <Grid key={table.id} item xs={4}>
                            <h2 className={style.table}>{table.name}</h2>
                            <SelectWaiters table={table} />
                            <Button variant="text">Open bill</Button>
                            <EnhancedTable table={table} />
                            <div>Sum of your bill : {table.sumBill}</div>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default App;
