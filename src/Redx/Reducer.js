// importer les actions types
import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  NEW_TASK
} from "./actions-types";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];

    case REMOVE_TASK:
      return state.filter(el => el.id != action.payload);

    case COMPLETE_TASK:
      return state.map(el =>
        el.id == action.payload ? { ...el, checked: !el.checked } : el
      );

    case EDIT_TASK:
      // return state.filter(el =>
      //   el.id === action.id ? { ...el, desc: action.input } : el
      //   );
        return (
          
          state.map(el=> el.id == action.payload.id ? {...el, desc: action.payload.input}: el) 
        )
        
    case NEW_TASK:
      return {
        ...state,
        todoslist: state.map(el =>
          el.newinput === action.payload ? { ...el, edit: !el.edit } : el
        )
        };

    default:
      return state;
  }
};
export default reducer;
