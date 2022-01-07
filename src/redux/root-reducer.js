import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
import basketReducer from "./basket/reducer";

const rootReducer = combineReducers({
    data: authReducer,
    basket: basketReducer,
});

export default rootReducer
