import { useState, useContext } from 'react';
import styles from './TodoList.module.css';
import { FaPlus } from 'react-icons/fa';
import Header from '../Header/Header';
import { userDataContext } from '../../context/UserNameContext';
import { todoContext } from '../../context/TodoListContext';
import Modal from '../Modal/Modal';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList(){
  const { state: userState } = useContext(userDataContext);
  const { state: todoState, dispatch } = useContext(todoContext);
  const [showModal, setShowModal] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  const onHandlerAddTodo = (event) => {
    event.preventDefault()
    const text = event.target.todoInput.value;
    dispatch({ type: 'ADD_TODO', payload: text });
    event.target.todoInput.value = '';    
    setShowModal(false);
  } 

  const onHandlerCompleteTodo = (index) => {
    dispatch({ type: 'COMPLETE_TODO', payload: index });
  };

  const onHandlerRemoveTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', payload: index });
  };


  return (
    <>
      <Header name={userState.userName} />
      <div className={styles.buttonBox}>
        <button className={!showCompleted ? styles.selected : ''}  onClick={() => setShowCompleted(false)}>해야할 일</button>
        <button className={showCompleted ? styles.selected : ''} onClick={() => setShowCompleted(true)} >완료된 일</button>
      </div>
      <section className={styles.todoSection}>
        <ul className={styles.todoList}>
          {todoState.todos.filter(todo => showCompleted ? todo.completed : true).map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} onComplete={onHandlerCompleteTodo} onDelete={onHandlerRemoveTodo} />
          ))}
        </ul>
      
        {showModal && (
          <Modal onClose={() => setShowModal(false)} onSubmit={onHandlerAddTodo} />
        )}
      </section>
      <button className={styles.addButton} onClick={() => setShowModal(true)}><FaPlus /></button>
    </>
  );
};  