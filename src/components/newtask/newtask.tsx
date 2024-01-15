import styles from './newtaskstyles.module.css'
import plus from '../../assets/plus.svg'

export function NewTask() {
  return (
    <div>
      <form className={styles.form}>
        <input 
          className={styles.input} 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
        />
        <button 
          type="submit" 
          className={styles.button}
        >
          Criar
          <img src={plus} alt="" />
        </button>
      </form>
    </div>
  )
}