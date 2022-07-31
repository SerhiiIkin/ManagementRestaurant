import { combineReducers } from "redux";
import tablesReducer from "./tablesReducer";
import menuReducer from "./menuReducer";
import waitersReducer from "./waitersReducer";

const rootReducer = combineReducers({
    tablesReducer,
    menuReducer,
    waitersReducer,
});

export default rootReducer;
