import { PlusCircleIcon } from 'lucide-react'
import { useState } from 'react'

interface AddTaskProps {
  onAddTask: (text: string) => void
}

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState<string>('')
  return (
    <div className="mt-topEffect flex items-center justify-center gap-2">
      <input
        className="border-gray7 bg-gray5 text-gray1 h-14 w-[638px] border-spacing-4 rounded-xl p-4 text-base"
        placeholder="Adicione uma nova tarefa"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        className="border-gray7 text-gray1 hover:bg-blue1 bg-blueDark flex h-14 w-[90px] border-spacing-1 cursor-pointer items-center justify-center gap-2 rounded-[0.5rem] p-1 transition-colors"
        onClick={() => {
          setText('')
          onAddTask(text)
        }}
      >
        Criar
        <PlusCircleIcon size={18} />
      </button>
    </div>
  )
}
