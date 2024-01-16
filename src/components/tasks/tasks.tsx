import styles from './tasksStyles.module.css'
import agenda from '../../assets/Clipboard.png'

export function Task() {
  return (
    <div className={styles.wrapper}>
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
        <span>
          <p className={styles.text1}>
          Você ainda não tem tarefas cadastradas
          </p>
          <p className={styles.text2}>
            Crie tarefas e organize seus itens a fazer
          </p>
        </span>
        
      </div>
    </div>
  )
}