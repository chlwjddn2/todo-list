import styles from './Modal.module.css';

export default function Modal({ onClose, onSubmit }){
  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <h2>할 일 추가</h2>
          <form onSubmit={onSubmit}>
            <input className={styles.input} name="todoInput" type="text" placeholder="할 일을 입력하세요" autoFocus />
            <div className={styles.buttons}>
              <button type="submit">추가</button>
              <button type="button" onClick={onClose}>취소</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};  