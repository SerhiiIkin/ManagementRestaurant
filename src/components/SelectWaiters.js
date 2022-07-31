import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useSelectWaiters from "../hooks/useSelectWaiters";

function SelectWaiters({ table }) {
    const { waiter, handleChange, waiters } = useSelectWaiters(table);

    return (
        <>
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
                        <MenuItem
                            key={waiter.id}
                            disabled={waiter.isSelected}
                            value={waiter.id}>
                            {waiter.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}

export default SelectWaiters;
