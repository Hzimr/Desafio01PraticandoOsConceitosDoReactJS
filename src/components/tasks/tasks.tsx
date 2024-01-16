import styles from './tasksStyles.module.css'
import agenda from '../../assets/Clipboard.png'
import { NewTask } from '../newtask/newtask'
import { NoTask } from '../notask/notask'

export function Task() {
  return (
    <div className={styles.wrapper}>
      <NewTask />
      <header className={styles.tasksInfo}>
        <section className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <p className={styles.valorTasks}>0</p>
        </section>
        <section className={styles.tasksFinished}>
          <p>Concluídas</p>
          <p className={styles.valorTasks}>0</p>
        </section>
      </header> 
      <div className={styles.content}>
        <img src={agenda} alt="" />
        <NoTask />
      </div>
    </div>
  )
}