import agenda from '../../assets/Clipboard.png'

export function NoTask() {
  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <img src={agenda} alt="" />
      <span>
        <p className="text-gray3 text-center text-base font-bold">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-gray3 text-center text-base">
          Crie tarefas e organize seus itens a fazer
        </p>
      </span>
    </div>
  )
}
