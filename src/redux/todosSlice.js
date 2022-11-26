const { createSlice } = require('@reduxjs/toolkit');


const initialState = { todos: [] };
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

const {actions, reducer} = todosSlice;

export default reducer;

export const {
  addTodo,
  deleteTodo,
} = actions


