import InputField from "../shared/input-field"

export interface FormEventPasswordProps {
  password: string
  setPassword: (password: string) => void
  accessEvent: () => void
}

const FormEventPassword = (props: FormEventPasswordProps) => {
  return (
    <div className="flex flex-col gap-4 bg-zinc-700/80 rounded-lg p-10 border border-zinc-800 shadow-lg w-[550px]">
      <h1 className="text-5xl font-bold text-center">Bem vindo(a)</h1>
      <h2 className="text-3xl text-centerfont-semibold -mt-3 text-center">Area administrativa</h2>
      <p className="text-sm text-zinc-400 font-light text-center">Insira sua senha para gerenciar o evento</p>
      <InputField
        value={props.password}
        onChange={e => props.setPassword(e.target.value)}
        type="password"
        placeholder="Digite sua senha"
      />
      <button className="button primary" onClick={props.accessEvent}>
        <span>Acessar Evento</span>
      </button>
    </div>
  )
}

export default FormEventPassword
