import './global.css'

import { useReducer } from 'react'

import AddTask from './components/addTask/AddTask'
import { Header } from './components/header/header'
import TaskList from './components/taskList/TaskList'

interface Task {
  id: number
  text: string
  completed: boolean
}

type Action =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: Task }
  | { type: 'deleted'; id: number }
  | { type: 'toggleCompleted'; id: number }

function tasksReducer(tasks: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
    }
    case 'changed': {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task
        } else {
          return task
        }
      })
    }
    case 'deleted': {
      return tasks.filter((task) => task.id !== action.id)
    }
    case 'toggleCompleted': {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, completed: !task.completed } // alterna o estado de 'completed'
        } else {
          return task
        }
      })
    }
    default: {
      throw Error('Unknown action: ' + (action as { type: string }).type)
    }
  }
}

export function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  function handleAddTask(text: string) {
    dispatch({
      type: 'added',
      id: nextId++,
      text,
    })
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: 'changed',
      task,
    })
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      id: taskId,
    })
  }

  function handleToggleCompleted(taskId: number) {
    dispatch({
      type: 'toggleCompleted',
      id: taskId,
    })
  }

  return (
    <main className="flex flex-col items-center gap-8">
      <Header />
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        onToggleCompleted={handleToggleCompleted}
      />
    </main>
  )
}

let nextId = 0
const initialTasks: Task[] = []
