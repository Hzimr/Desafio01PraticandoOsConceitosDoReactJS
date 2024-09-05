import { Trash2 } from 'lucide-react'
import { useState } from 'react'

import { NoTask } from '../notask/notask'

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <>
      {tasks.length === 0 && <NoTask />}
      {tasks.length !== 0 && (
        <div className="flex w-[44rem] flex-col items-center justify-center gap-16 pb-4 pt-4">
          <header className="mb-6 flex w-[46rem] flex-row justify-between gap-2">
            <section className="text-blue1 flex items-center gap-2 text-base font-bold">
              <p>Tarefas criadas</p>
              <p className="text-gray2 bg-gray4 flex items-center rounded-full pb-1 pl-2 pr-2 pt-1">
                {tasks.length}
              </p>
            </section>
            <section className="text-purple flex items-center gap-2 text-base font-bold">
              <p>Concluídas</p>
              <p className="text-gray2 bg-gray4 flex items-center rounded-full pb-1 pl-2 pr-2 pt-1">
                0 de {tasks.length}
              </p>
            </section>
          </header>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <Task
                  task={task}
                  onChange={onChangeTask}
                  onDelete={onDeleteTask}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  let taskContent
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            })
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          })
        }}
      />
      <span>{taskContent}</span>
      <button onClick={() => onDelete(task.id)}>
        <Trash2 />
      </button>
    </label>
  )
}
