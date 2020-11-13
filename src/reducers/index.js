import { combineReducers } from "redux";
import productosReducer from "./productosReducer";
import alerttaReducer from "./alerttaReducer";

export default combineReducers({
  productos: productosReducer,
  alerta: alerttaReducer,
});
