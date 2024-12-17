import { useState } from "react"

export interface StepsProps {
  labels: string[]
  actionLabel: string
  allowsNextStep?: boolean[]
  action: () => void
  children: any
}

const Steps = (props: StepsProps) => {

  const [atualStep, setAtualStep] = useState(0)

  function withoutPreviousStep() {
    return atualStep === 0
  }

  function withoutNextStep() {
    return atualStep === props.labels.length - 1
  }

  function previousStep() { 
    if (withoutPreviousStep()) return
    setAtualStep(atualStep - 1)
  }
  function nextStep() {
    if (withoutNextStep()) return
    setAtualStep(atualStep + 1)
  }

  function renderLabels() {
    return <div className="flex gap-10 select-none">
      {props.labels.map((label, index) => {
        const selected = atualStep === index
        return (
          <div key={index} className="flex items-center gap-2">
            <span
              className={`flex justify-center items-center w-9 h-9 rounded-full ${selected ? 'bg-white text-black' : 'bg-zinc-700 text-zinc-400'}`}
            >
              {index + 1}
            </span>
            <span
              className={`${selected ? 'text-white' : 'text-zinc-600'}`}
            >
              {label}
            </span>
          </div>
        )
      })}
    </div>
  }

  const allowsNextStep = props.allowsNextStep?.[atualStep] ?? true

  return (
    <div className="flex-1 flex flex-col gap-10 w-full">
      <div className="self-center">{renderLabels()}</div>
      <div>{props.children[atualStep]}</div>
      <div className="flex justify-between">
        <div>
          {withoutPreviousStep() ? null : (
            // transform button component
            <button
              onClick={previousStep}
              className={`button ${withoutPreviousStep() ? 'bg-zinc-400 cursor-not-allowed opacity-50' : 'bg-zinc-700 hover:bg-zinc-600 text-white'}`}
            >
              <span>Anterior</span>
            </button>
          )}
        </div>

        <div>
          {withoutNextStep() ? (
            <button
              onClick={props.action}
              disabled={!allowsNextStep}
              className={`button ${!allowsNextStep ? 'bg-zinc-400 cursor-not-allowed opacity-50' : 'bg-green-700 hover:bg-green-600 text-white'}`}
            >
              <span>{props.actionLabel}</span>
            </button>
          ) : (
            <button
              onClick={nextStep}
              disabled={!allowsNextStep || withoutNextStep()}
              className={`button ${!allowsNextStep || withoutNextStep() ? 'bg-zinc-400 cursor-not-allowed opacity-50' : 'bg-green-700 hover:bg-green-600 text-white'}`}
            >
              <span>Proximo</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
 
export default Steps;