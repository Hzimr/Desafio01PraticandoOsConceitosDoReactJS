import { Trash2 } from "lucide-react";
import styles from "./taskStyles.module.css"

interface TaskProps {
  textTask: string;
  onDeleteTask: (comment: string) => void;
}

export function Task({textTask, onDeleteTask}: TaskProps){
  function handleDeleteTask() {
    onDeleteTask(textTask)
  }

  return (
    <div className={styles.wrapper}>
      <input type="radio"></input>
      <p>{textTask}</p>
      <button className={styles.button} onClick={handleDeleteTask} title="Deletar Tarefa">
        <Trash2 />
      </button>
    </div>
    
  )
}