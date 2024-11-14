// eslint-disable-next-line prettier/prettier
import agenda from "../../assets/Clipboard.png";

export function NoTask() {
  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <img src={agenda} alt="" />
      <span>
        <p className="text-center text-base font-bold text-gray3">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-center text-base text-gray3">
          Crie tarefas e organize seus itens a fazer
        </p>
      </span>
    </div>
    // eslint-disable-next-line prettier/prettier
  );
}
