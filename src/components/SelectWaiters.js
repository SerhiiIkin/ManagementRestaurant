import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

function SelectWaiters({ table }) {
    const waiters = table.waiters;
    const [waiter, setWaiter] = useState("");

    function handleChange(e) {
        setWaiter(e.target.value);
    }

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                    Waiters
                </InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={waiter}
                    onChange={handleChange}
                    autoWidth
                    label="Waiters">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {waiters.map((waiter) => (
                        <MenuItem key={waiter.id} value={waiter.id}>
                            {waiter.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectWaiters;
