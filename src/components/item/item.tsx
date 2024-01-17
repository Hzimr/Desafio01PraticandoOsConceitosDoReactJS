import { Check, Trash2 } from "lucide-react";
import styles from "./itemStyles.module.css"

interface ItemProps {
  textItem: string;
  onDeleteTask: (comment: string) => void;
  isChecked: boolean;
}

export function Item({textItem, onDeleteTask, isChecked}: ItemProps){
  function handleDeleteTask() {
    onDeleteTask(textItem)
  }

  const checkboxCheckedClassname = isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = isChecked
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" >
          <input type="checkbox"></input>
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {isChecked && <Check size={12} />}
          </span>
          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {textItem}
          </p>
        </label>
      </div>
      <button className={styles.button} onClick={handleDeleteTask} title="Deletar Tarefa">
        <Trash2 />
      </button>
    </div>
    
  )
}