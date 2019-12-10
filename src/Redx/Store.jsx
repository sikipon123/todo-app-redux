import { createStore } from "redux";
import reducer from "./Reducer";

const initialState = [];

//Creating a Store
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
