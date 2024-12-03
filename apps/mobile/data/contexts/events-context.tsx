import { createContext, useState } from 'react'

import { Event } from 'core'

interface EventsContextProps {
  event: Event | null
  events: Event[]

  getEvent(id: string): void
  delEvent(id: string): void
  addEventQrCode(qrcode: string): void
}

const EventsContext = createContext<EventsContextProps>({} as any)

export function EventsProvider(props: any) {
  const [event, setEvent] = useState<Event | null>(null)
  const [events, setEvents] = useState<Event[]>([])

  const getEvent = (id: string) => {
    const event = events.find(event => event.id === id)
    setEvent(event ?? null)
  }

  const addEventQrCode = (qrcode: string) => {
    // implementation of addEventQrCode
  }

  const delEvent = (id: string) => {
    const newEvents = events.filter(event => event.id !== id)
    setEvents(newEvents)
  }

  return (
    <EventsContext.Provider
      value={{
        event,
        events,
        getEvent,
        addEventQrCode,
        delEvent
      }}
    >
      {props.children}
    </EventsContext.Provider>
  )
}

export default EventsContext
