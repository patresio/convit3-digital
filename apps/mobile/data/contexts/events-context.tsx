import { createContext, useEffect, useState } from 'react'
import { Event } from 'core'
import useAPI from '../hooks/useAPI'
import useLocalStorage from '../hooks/useLocalStorage'

interface EventsContextProps {
  event: Event | null
  events: Event[]

  getEvent(id: string): void
  delEvent(id: string): void
  addEventQrCode(qrcode: string): void
}

const EventsContext = createContext<EventsContextProps>({} as any)

export function EventsProvider(props: any) {
  const { httpPost } = useAPI()
  const { saveItem, getItem } = useLocalStorage()

  const [event, setEvent] = useState<Event | null>(null)
  const [events, setEvents] = useState<Event[]>([])

  const getEvent = async (id: string) => {
    if (!events) return
    const event = events.find(event => event.id === id)
    const loadedEvent = await loadEvent(id, event?.password || '')
    setEvent(loadedEvent ?? null)
  }

  const addEventQrCode = async (qrcode: string) => {
    try {
      const idAndPassword = JSON.parse(qrcode)
      const event = await loadEvent(idAndPassword.id, idAndPassword.password)
      if (!event) {
        delEvent(idAndPassword.id)
      }

      const newEvents = events.filter(event => event.id !== idAndPassword.id)
      newEvents.push(event)

      saveItem('events', newEvents)
      setEvents(newEvents)
    } catch (error: any) {
      alert(JSON.stringify(error))
    }
  }

  const delEvent = (id: string) => {
    const newEvents = events.filter(event => event.id !== id)
    saveItem('events', newEvents)
    setEvents(newEvents)
  }

  const loadEvent = async (id: string, password: string) => {
    const event = await httpPost('events/access', { id, password })
    return event
  }

  const loadEvents = async () => {
    const events = await getItem('events')
    setEvents(events || [])
  }

  useEffect(() => {
    loadEvents()
  }, [])

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
