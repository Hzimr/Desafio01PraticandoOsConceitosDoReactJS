import styles from './AppStyles.module.css'
import { Header } from './components/header/header'
import { Task } from './components/tasks/tasks'
import './global.css'

export function App() {

  return (
    <main className={styles.main}>
      <Header />
      <Task />
    </main>
  )
}