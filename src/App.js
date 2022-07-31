import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getTablesList } from "./store/actions/table";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.module.css";
import NotFound from "./components/NotFound";
import Table from "./pages/Table/Table";
import { getMenu } from "./store/actions/menu";
import { getWaiters } from "./store/actions/waiters";

function App() {
    const dispatch = useDispatch();
    const tables = useSelector((state) => state.tablesReducer.tables);

    useEffect(() => {
        dispatch(getTablesList());
        dispatch(getMenu());
        dispatch(getWaiters());
    }, []);
    

    return (
        <Box sx={{ flexGrow: 1, maxWidth: "95%", margin: "0 auto" }}>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                {tables.map((table) => {
                    return (
                        <Route
                            key={table.id}
                            path={`Table=${table.id}`}
                            element={<Table table={table} />}
                        />
                    );
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Box>
    );
}

export default App;
