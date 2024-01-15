import todoLogo from "../../assets/rocket.svg"
import styles from './headerStyles.module.css'

export function Header(){
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Foguete azul" />
      <span className={styles.span}>
        <h1 className={styles.to}>to</h1>
        <h1 className={styles.do}>do</h1>
      </span>
    </header>
  )
}