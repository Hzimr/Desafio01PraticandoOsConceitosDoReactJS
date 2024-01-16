import styles from './tasksStyles.module.css'
import plus from '../../assets/plus.svg'
import { NoTask } from '../notask/notask'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Task } from '../task/task'

export function Tasks() {
  const [task, setTask] = useState([''])

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    console.log(event.target)

    setTask([...task, newTaskText])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);

  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = task.filter(task => {
      return task !== taskToDelete
    })

    setTask(tasksWithoutDeletedOne)
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <div className={styles.wrapper}>
      {/*<NewTask /> */}
      <div>
      <form className={styles.form} onSubmit={handleCreateNewTask}>
        <input
          name="task"
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          onChange={handleNewTaskChange}
          value={newTaskText}
          onInvalid={handleNewTaskInvalid}
          className={styles.input}
          required
        />
        <button 
          className={styles.button}
          type="submit"
          disabled={isNewTaskEmpty} 
        >
          Criar
          <img src={plus} />
        </button>
      </form>
      </div>


      <header className={styles.tasksInfo}>
        <section className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <p className={styles.valorTasks}>{task.length}</p>
        </section>
        <section className={styles.tasksFinished}>
          <p>Concluídas</p>
          <p className={styles.valorTasks}>0</p>
        </section>
      </header> 
      <div className={styles.content}>  
      {task.length > 0 && task.map((task) => (
        <Task
          key={task}
          textTask={task}
          onDeleteTask={deleteTask}
          />
        ))}
        {task.length === 0 && <NoTask />}
      </div>
    </div>
  )
}