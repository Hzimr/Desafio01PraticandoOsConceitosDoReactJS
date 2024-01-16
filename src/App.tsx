import styles from './AppStyles.module.css'
import { Header } from './components/header/header'
import { NewTask } from './components/newtask/newtask'
import { Task } from './components/tasks/tasks'
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <NewTask />
      <Task />
    </div>
  )
}