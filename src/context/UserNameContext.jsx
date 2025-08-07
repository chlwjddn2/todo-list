import { createContext, useReducer, useEffect } from "react";

export const initState = {
  step: 0,
  tempName: '',    // 입력된 이름
  userName: '',    // 최종 확정된 이름
};

const init = () => {
  const saved = localStorage.getItem('userData');
  return saved ? JSON.parse(saved) : initState;
};

export const stateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEMP_NAME': return { ...state, tempName: action.payload, step: 1 };
    case 'CONFIRM_NAME': return { ...state, userName: state.tempName, step: 2 };
    case 'RESET': return { ...state, tempName: '', step: 0 };
    default: return state;
  }
};

export const userDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initState);
  console.log('sssssss');
  
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(state));
  }, [state]);

  const value = { state, dispatch };
  
  return (
    <userDataContext.Provider value={value}>{children}</userDataContext.Provider>
  );
};

