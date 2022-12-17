import { combineReducers} from "redux";
import updateNum from "./counter";
import addCartReducer from "./cart";
const rootReducer = combineReducers({
    updateNum,addCartReducer
})
export default rootReducer;