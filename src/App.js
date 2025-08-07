import './App.css';
import { useContext } from 'react';
import UserName from './components/UserName/UserName'; 
import ConfirmUserName from './components/UserName/ConfirmUserName';
import TodoList from './components/TodoList/TodoList';
import { TodoProvider } from './context/TodoListContext';
import { userDataContext } from './context/UserNameContext';

export default function App() {
  const { state } = useContext(userDataContext);
  
  return (
    <>
      {state.step === 0 && <UserName></UserName>}
      {state.step === 1 && <ConfirmUserName name={state.tempName}></ConfirmUserName>}
      {state.step === 2 && <TodoProvider><TodoList /></TodoProvider>}
    </>
  );
}