// Aciont Value
const ADD_TODO = 'ADD_TODO';
const DElETE_TODO = 'DElETE_TODO';
const GET_TODO_BY_ID = 'GET_TODO_BY_ID';
const TOGGLE_STATUS_TODO = 'TOGGLE_STATUS_TODO';

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DElETE_TODO,
    payload,
  };
};

export const getTodoById = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// Initial State
const initialState = {
  todos: [
    {
      id: '1',
      title: '리액트 공부하기',
      text: '리액트 기초를 공부해봅시다.',
      isDone: false,
    },
  ],
  todo: {
    id: '0',
    title: '',
    text: '',
    isDone: false,
  },
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DElETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};

export default todos;
