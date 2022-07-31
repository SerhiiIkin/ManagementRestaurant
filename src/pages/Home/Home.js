import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SelectWaiters from "../../components/SelectWaiters";
import tableImg from "../../img/table.jpg";

function Home() {
    const tables = useSelector((state) => state.tablesReducer.tables);

    return (
        <Grid container spacing={4}>
            {tables.map((table) => {
                return (
                    <Grid
                        style={{ display: "flex" }}
                        key={table.id}
                        item
                        xs={4}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: ".5rem",
                            }}>
                            <h2>Table {table.id}</h2>
                            <p>Check amount: {table.sumCheck || 0} $</p>
                            <Link
                                style={{ cursor: "pointer" }}
                                to={`/Table=${table.id}`}>
                                <img
                                    style={{ maxWidth: "100%" }}
                                    src={tableImg}
                                    alt="table"
                                />
                            </Link>
                        </div>

                        <SelectWaiters table={table} />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default Home;
