import React, { useState } from 'react';
import { useReducer } from 'react';
import styles from './UserName.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { userDataContext } from '../../context/UserNameContext';
import { useContext } from 'react';


export default function UserName(){
  const [input, setInput] = useState('');
  const { dispatch } = useContext(userDataContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (input.trim()) {
      dispatch({ type: 'SET_TEMP_NAME', payload: input.trim() });
      setInput('');
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>ToDoList</h1>

      <div>
        <h2 className={styles.text}>이름을 입력하세요</h2>
        <form className={styles.form} onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <input
            className={styles.input}
            type="text"
            placeholder="이름을 입력하세요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={styles.button} type="submit">
            <FaArrowRight />
          </button>
        </form>
      </div>
      
    </section>
  );
};