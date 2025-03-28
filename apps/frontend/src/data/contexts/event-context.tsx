'use client'
import { createContext, useCallback, useEffect, useState } from 'react'
import {
  createEmptyEvent,
  createEmptyGuest,
  Event,
  Guest,
  utilsDate
} from 'core'
import useAPI from '../hooks/useAPI'
import { useRouter } from 'next/navigation'
import useMessages from '../hooks/useMessages'

export interface EventContextProps {
  event: Partial<Event>
  events: Event[] | any
  guest: Partial<Guest>
  validSlug: boolean

  alterEvent(event: Partial<Event>): void
  alterGuest(guest: Partial<Guest>): void

  loadEvent(idOrSlug: string): Promise<void>
  loadEvents(): Promise<void>
  saveEvent(): Promise<void>

  saveGuest(): void
}

const EventContext = createContext<EventContextProps>({} as any)

export function EventContextProvider(props: any) {
  const { httpPost, httpGet } = useAPI()

  const { addError } = useMessages()

  const router = useRouter()
  
  const [validSlug, setValidSlug] = useState(true)
  
  // TODO: useLocalStorage for load events
  const [events, setEvents] = useState<Event[]>()

  const [event, setEvent] = useState<Partial<Event>>(createEmptyEvent())
  const [guest, setGuest] = useState<Partial<Guest>>(createEmptyGuest())

  const loadEvents = useCallback(async function () {
    try {
      const events = await httpGet('/events')
      setEvents(events)
    } catch (error: any) {
      addError(error.message ?? 'Ocorreu um erro inesperado')
    }
  }, [httpGet, addError])

  const saveEvent = useCallback(
    async function () {
      try {
        const createEvent = await httpPost('/events', event)
        router.push('/event/success')
        setEvent({
          ...createEvent,
          date: utilsDate.parse(createEvent.date)
        })
      } catch (error: any) {
        addError(error.message ?? 'Ocorreu um erro inesperado')
      }
    },
    [event, httpPost, router, addError]
  )

  const saveGuest = useCallback(
    async function () {
      try {
        await httpPost(`/events/${event.slug}/guest`, guest)
        router.push('/invitation/thank-you')
      } catch (error: any) {
        addError(error.message ?? 'Ocorreu um erro inesperado')
      }
    },
    [httpPost, event, guest, router, addError]
  )

  const loadEvent = useCallback(
    async function (idOrSlug: string) {
      try {
        const event = await httpGet(`/events/${idOrSlug}`)
        if (!event) return
        setEvent({
          ...event,
          date: utilsDate.parse(event.date)
        })
        setValidSlug(true)
      } catch (error: any) {
        addError(error.message ?? 'Ocorreu um erro inesperado')
      }
    },
    [httpGet, setEvent, addError]
  )

  

  const validateSlug = useCallback(
    async function () {
      try {
        const { valid } = await httpGet(
          `/events/validation/${event.slug}/${event.id}`
        )
        setValidSlug(valid)
      } catch (error: any) {
        addError(error.message ?? 'Ocorreu um erro inesperado')
      }
    },
    [httpGet, event, addError]
  )

  useEffect(() => {
    if (event?.slug) validateSlug()
  }, [event?.slug, validateSlug])

  return (
    <EventContext.Provider
      value={{
        event,
        guest,
        events,
        validSlug,
        alterEvent: setEvent,
        alterGuest: setGuest,
        saveEvent,
        loadEvent,
        loadEvents,
        saveGuest
      }}
    >
      {props.children}
    </EventContext.Provider>
  )
}

export default EventContext
