import styles from './TodoItem.module.css';
import { FaTrash } from 'react-icons/fa'; 

export default function TodoItem({ todo, index, onComplete, onDelete }) {
  return (
    <li className={styles.todoItem} key={index}>
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onComplete(index)}
        />
        <label className={todo.completed ? styles.completed : ''}>{todo.text}</label>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(index)}>
        <FaTrash />
      </button>
    </li>
  );
}