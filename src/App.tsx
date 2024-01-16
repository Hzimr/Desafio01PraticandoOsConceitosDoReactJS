import styles from './AppStyles.module.css'
import { Header } from './components/header/header'
import { Tasks } from './components/tasks/tasks'
import './global.css'

export function App() {

  return (
    <main className={styles.main}>
      <Header />
      <Tasks />
    </main>
  )
}