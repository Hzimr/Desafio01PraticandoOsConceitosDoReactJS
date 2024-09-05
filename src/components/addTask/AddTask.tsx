import { useState } from 'react'

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('')
  return (
    <div className="flex items-center gap-8">
      <input
        placeholder="Adicione uma nova tarefa"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        className="bg-gray-400 pl-1 pr-1"
        onClick={() => {
          setText('')
          onAddTask(text)
        }}
      >
        Add
      </button>
    </div>
  )
}
