import useEventContext from "@/data/hooks/useEvent"
import Steps from "./steps"
import InputField from "../shared/input-field"
import { Alias, utilsDate } from "core"

const FormEvent = () => {

  const { event, validSlug, alterEvent, saveEvent } = useEventContext()

  const labels = [
    "Identificação do evento",
    "Local e data",
    "Informações Finais",
  ]

  const allowsNextStep: boolean[] = [
    !!event.slug && !!event.name && validSlug, 
    !!event.date && !!event.location, 
    !!event.description && (event.expectedAudience ?? 0) > 0 && !!event.image && !!event.bgImage
  ]
  
  return (
    <div>
      <Steps
        labels={labels}
        actionLabel="Salvar"
        action={saveEvent}
        allowsNextStep={allowsNextStep}
      >
        <div className="flex flex-col gap-5">
          <InputField
            label="Identificador"
            description="Identificador único e exclusivo para o evento (usado na URL)"
            value={Alias.format(event.slug ?? '')}
            onChange={e =>
              alterEvent({
                ...event,
                slug: Alias.format(e.target.value)
              })
            }
            error={validSlug ? '' : 'Alias já foi utilizado em outro evento'}
          />
          <InputField
            label="Nome"
            description='Nome do evento (ex.: "Festa de aniversário do João")'
            value={event.name ?? ''}
            onChange={e =>
              alterEvent({
                ...event,
                name: e.target.value
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputField
            label="Data"
            description="Data e hora em que o evento ocorrerá"
            value={utilsDate.format(event.date ?? new Date())}
            onChange={e =>
              alterEvent({
                ...event,
                date: utilsDate.parse(e.target.value)
              })
            }
            type="datetime-local"
          />
          <InputField
            label="Local"
            description="Local onde o evento será realizado"
            value={event.location ?? ''}
            onChange={e =>
              alterEvent({
                ...event,
                location: e.target.value
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputField
            label="Descrição"
            description='Descrição do evento (ex.: "Só entra se trouxer presente")'
            value={event.description ?? ''}
            onChange={e =>
              alterEvent({
                ...event,
                description: e.target.value
              })
            }
          />
          <InputField
            label="Imagem"
            description="Imagem do evento (ex.: https://...) (ex.: https://...), que será exibida no convite"
            value={event.image ?? ''}
            onChange={e =>
              alterEvent({
                ...event,
                image: e.target.value
              })
            }
          />
          <InputField
            label="Background"
            description="Imagem do background do evento (ex.: https://...) (ex.: https://...), que será exibida no background do convite"
            value={event.bgImage ?? ''}
            onChange={e =>
              alterEvent({
                ...event,
                bgImage: e.target.value
              })
            }
          />
          <InputField
            label="Publico Esperado"
            description="Total de convidados e acompanhantes esperados"
            value={event.expectedAudience ?? ''}
            onChange={e =>
              alterEvent({
                ...event,
                expectedAudience: e.target.value
              })
            }
            type="number"
            min={1}
          />
        </div>
      </Steps>
    </div>
  )
}

export default FormEvent
