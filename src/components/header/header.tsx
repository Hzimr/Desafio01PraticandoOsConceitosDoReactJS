import todoLogo from '../../assets/rocket.svg'

export function Header() {
  return (
    <header className="bg-gray7 flex w-full items-center justify-center gap-1 pb-20 pt-20">
      <img src={todoLogo} alt="Foguete azul" />
      <h1 className="flex">
        <span className="text-blue1 text-5xl font-bold">to</span>
        <span className="text-purpleDark text-5xl font-bold">do</span>
      </h1>
    </header>
  )
}
