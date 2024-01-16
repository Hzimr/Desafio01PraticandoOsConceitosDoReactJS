import styles from './tasksStyles.module.css'

export function Task() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.tasksInfo}>
        <section className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <p>0</p>
        </section>
        <section className={styles.tasksFinished}>
          <p>Concluídas</p>
          <p>0</p>
        </section>
      </header>
    </div>
  )
}