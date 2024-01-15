import styles from './AppStyles.module.css'
import { Header } from './components/header/header'
import { NewTask } from './components/newtask/newtask'
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <NewTask />
    </div>
  )
}