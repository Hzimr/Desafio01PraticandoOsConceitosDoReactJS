/* eslint-disable prettier/prettier */
import { Check, Trash2 } from "lucide-react";
import { useState } from "react";

import { NoTask } from "../notask/notask";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
  onToggleCompleted: (id: number) => void;
};

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
  onToggleCompleted,
}: TaskListProps) {
  const completedTasksCount = tasks.filter(
    (task: Task) => task.completed,
  ).length;

  return (
    <>
      <header className="flex w-[46rem] flex-row justify-between gap-2">
        <section className="flex items-center gap-2 text-base font-bold text-blue1">
          <p>Tarefas criadas</p>
          <p className="flex items-center rounded-full bg-gray4 pl-2 pr-2 text-gray2">
            {tasks.length}
          </p>
        </section>
        <section className="flex items-center gap-2 text-base font-bold text-purple">
          <p>Concluídas</p>
          <p className="flex items-center rounded-full bg-gray4 pl-2 pr-2 text-gray2">
            {tasks.length === 0 && <span>0</span>}
            {tasks.length !== 0 && (
              <span>
                {completedTasksCount} de {tasks.length}
              </span>
            )}
          </p>
        </section>
      </header>
      <div className="h-[0.5px] w-[46rem] bg-gray4" />
      {tasks.length === 0 && <NoTask />}
      {tasks.length !== 0 && (
        <div className="flex w-[44rem] flex-col items-center justify-center gap-16 pb-4 pt-4">
          <ul className="flex flex-col gap-3">
            {tasks.map((task: Task) => (
              <li key={task.id}>
                <Task
                  task={task}
                  onChange={onChangeTask}
                  onDelete={onDeleteTask}
                  onToggleCompleted={onToggleCompleted}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

type TaskProps = {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (id: number) => void;
  onToggleCompleted: (id: number) => void;
};

function Task({ task, onChange, onDelete, onToggleCompleted }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className={`w-[560px] border-spacing-4 rounded-xl border-gray7 bg-gray5 p-4 text-base text-gray1 ${
            task.completed ? "line-through opacity-50" : ""
          }`}
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <p
          className={`w-[36rem] text-wrap break-words ${
            task.completed ? "line-through opacity-50" : ""
          }`}
        >
          {task.text}
        </p>
        <button onClick={() => setIsEditing(true)}>Editar</button>
      </>
    );
  }

  return (
    <div className="flex w-[46rem] flex-1 items-center justify-between gap-2 rounded-xl border-gray4 bg-gray5 p-2">
      <label htmlFor="" className="relative flex items-center justify-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompleted(task.id)}
          className="h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-blue1 bg-transparent checked:border-purpleDark checked:bg-purpleDark focus:outline-none focus:ring-2 focus:ring-purple focus:ring-opacity-50"
        />
        <Check
          className={`pointer-events-none absolute h-4 w-4 text-white ${task.completed ? "block" : "hidden"}`}
        />
      </label>

      <span className={`flex flex-1 justify-between gap-2 `}>
        {taskContent}
      </span>
      <button
        className="rounded-[4px] border-none bg-transparent p-1 transition-colors hover:text-danger"
        onClick={() => onDelete(task.id)}
      >
        <Trash2 />
      </button>
    </div>
  );
}
