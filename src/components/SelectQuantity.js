import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useSelectQuantity from "../hooks/useSelectQuantity";

function SelectQuantity({ table, row }) {
    const { quantity, handleChange } = useSelectQuantity(table, row);

    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 90 }}>
                <InputLabel
                    style={{ fontSize: "12px" }}
                    color="success"
                    id="demo-simple-select-autowidth-label">
                    Quantity
                </InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={quantity}
                    onChange={handleChange}
                    autoWidth
                    label="Quantity">
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

export default SelectQuantity;
