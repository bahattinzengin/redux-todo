
import { ActionTypes } from './../actionTypes/todoTypes';
const initialState = {
  todos: [],
  category: [],
  isEmpty: true,


}

const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload)


      return { ...state, todos: tempTodos }


    case ActionTypes.TODO_DELETE:
      const deleteTodos = state.todos.filter((todo) => todo.id !== action.payload)

      return { ...state, todos: deleteTodos }

    case ActionTypes.EDIT_TODO:
      const updateTodos = state.todos.map((item) => item.id === action.payload.id ? action.payload : item)

      return { ...state, todos: updateTodos }

      case ActionTypes.SET_TODOS:
        return { ...state, todos: action.payload };
    default:
      return state;
  }

}

export default todoReducer