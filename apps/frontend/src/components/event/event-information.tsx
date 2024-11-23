import type { Event } from '@/core'
import Information from '../shared/information'

export interface EventInformationProps {
  event: Event
  className?: string
}

const EventInformation = (props: EventInformationProps) => {
  const { event } = props
  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ''}`}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="text-2xl font-black">{event.slug}:</span>
        <span className="text-xl text-zinc-300">{event.name}</span>
      </div>
      <div className="flex gap-2">
        <Information label="Data:">
          <span>
            {new Date(event.date!).toLocaleDateString()}
            {' às '}
            {new Date(event.date!).toLocaleTimeString()}
          </span>
        </Information>
        <Information label="Local:">{event.location}</Information>
      </div>
      <Information label="Descrição:">{event.description}</Information>
    </div>
  )
}

export default EventInformation
