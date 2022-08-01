import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getTablesList } from "./store/actions/table";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.module.css";
import NotFound from "./components/NotFound";
import Table from "./pages/Table/Table";
import { getWaiters } from "./store/actions/waiters";
import { getMenu } from "./store/actions/menu";
import Loader from "./components/Loader";

function App() {
    const dispatch = useDispatch();
    const tables = useSelector((state) => state.tablesReducer.tables);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getTablesList());
        dispatch(getWaiters());
        dispatch(getMenu());
        setLoading(false)
    }, [dispatch]);

    return (
        <Box sx={{ flexGrow: 1, maxWidth: "95%", margin: "0 auto" }}>
            <Navigation />

            {loading && <Loader />}
            <Routes>
                <Route path="ManagementRestaurant/" element={<Home />} />
                {tables.map((table) => {
                    return (
                        <Route
                            key={table.id}
                            path={`ManagementRestaurant/Table=${table.id}`}
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
