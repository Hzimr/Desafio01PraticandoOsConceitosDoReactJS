// eslint-disable-next-line prettier/prettier
import todoLogo from "../../assets/rocket.svg";

export function Header() {
  return (
    <header className="flex w-full items-center justify-center gap-1 bg-gray7 pb-20 pt-20">
      <img src={todoLogo} alt="Foguete azul" />
      <h1 className="flex">
        <span className="text-5xl font-bold text-blue1">to</span>
        <span className="text-5xl font-bold text-purpleDark">do</span>
      </h1>
    </header>
    // eslint-disable-next-line prettier/prettier
  );
}
