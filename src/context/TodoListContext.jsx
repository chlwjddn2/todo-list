import React, { createContext, useReducer } from 'react';

const initState = {
  todos: []
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
      };  

    case 'COMPLETE_TODO': 
      return {
        ...state,
        todos: state.todos.map((todo, index) => 
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      }

    case 'REMOVE_TODO': 
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload)
      };  
  }
};

export const todoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initState);
  const value = { state, dispatch };
  
  return (
    <todoContext.Provider value={value}>{children}</todoContext.Provider>
  );
} 