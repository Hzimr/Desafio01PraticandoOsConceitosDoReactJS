import styles from './notaskStyles.module.css'
import agenda from '../../assets/Clipboard.png'


export function NoTask() {
  return (
    <>
      <img src={agenda} alt="" />
      <span>
        <p className={styles.text1}>
          Você ainda não tem tarefas cadastradas
        </p>
        <p className={styles.text2}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </span>
    </>
  )
}