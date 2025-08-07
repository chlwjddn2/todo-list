import { FaCheck, FaTimes } from 'react-icons/fa';
import styles from './ConfirmUserName.module.css';
import { useContext } from 'react';
import { userDataContext } from '../../context/UserNameContext';

export default function ConfirmUserName({ name }){
  const {state, dispatch} = useContext(userDataContext);

  const onConfirm = () => {
    dispatch({ type: 'CONFIRM_NAME' }); 
  }

  const onCancel = () => {
    dispatch({ type: 'RESET' });
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.text}>당신의 이름인가요?</p>
      <div className={styles.btnBox}>
        <button className={styles.confirmButton} onClick={onConfirm}><FaCheck /></button>
        <button className={styles.cancelButton} onClick={onCancel}><FaTimes /></button>
      </div>
    </section>
  );
};  