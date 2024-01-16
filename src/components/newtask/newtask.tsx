import styles from './newtaskstyles.module.css'
import plus from '../../assets/plus.svg'

// interface Task {
//   task: string;
//   status: string;
// }


export function NewTask() {
  return (
    <div>
      <form className={styles.form}>
        <input
          name="task"
          //onChange={handleNewTaskChange}
          //value={newTaskText}
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