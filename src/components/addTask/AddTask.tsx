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
        className="h-14 w-[638px] border-spacing-4 rounded-xl border-gray7 bg-gray5 p-4 text-base text-gray1"
        placeholder="Adicione uma nova tarefa"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        className="flex h-14 w-[90px] border-spacing-1 cursor-pointer items-center justify-center gap-2 rounded-[0.5rem] border-gray7 bg-blueDark p-1 text-gray1 transition-colors hover:bg-blue1"
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
