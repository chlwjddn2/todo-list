import { useContext } from 'react';
import getTody from '../../utils/getToday';
import styles from './Header.module.css';

export default function Header({ name }){
  return (
    <header className={styles.header}>
      <div className={styles.date}>{getTody()}</div>
      <h1>{name}님의 해야할 일 목록</h1>
    </header>
  );
};  