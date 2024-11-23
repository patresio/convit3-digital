import type { Event, Guest } from '@/core'
import EventInformation from './event-information'
import AccessViaQrCode from './access-via-qr-code'
import Statics from '../shared/statics'
import ListGuest from './list-guest'

export interface EventDashboardProps {
  event: Event
  presence: Guest[]
  absent: Guest[]
  totalGeral: number
}

const EventDashboard = (props: EventDashboardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <EventInformation event={props.event} className="flex-1" />
        <AccessViaQrCode event={props.event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statics
          text="Expectativa de Convidados:"
          value={props.event.expectedAudience}
          image="/icones/convidados.svg"
        />
        <Statics
          text="Confirmações:"
          value={props.presence.length}
          image="/icones/confirmados.svg"
        />
        <Statics
          text="Total Confirmado:"
          value={props.totalGeral}
          image="/icones/acompanhantes.svg"
        />
      </div>
      <button className="button primary self-end mt-12">
        <span>Atualizar Lista de Convidados</span>
      </button>
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram PRESENÇA
      </span>
      <ListGuest guests={props.presence} />
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <ListGuest guests={props.absent} />
    </div>
  )
}

export default EventDashboard
