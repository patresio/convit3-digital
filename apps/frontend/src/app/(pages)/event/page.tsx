'use client'
import FormEvent from '@/components/event/form-event'
import Window from '@/components/shared/window'
import useEventContext from '@/data/hooks/useEvent'

const EventPage = () => {
  const { event } = useEventContext()

  return (
    <div>
      <Window
        label="Qual evento vamos criar?"
        title={event?.name ? event?.name : 'Novo Evento'}
        image={event?.image ? event?.image : ''}
        background={event?.bgImage ? event?.bgImage : ''}
      >
        <FormEvent />
      </Window>
    </div>
  )
}

export default EventPage
