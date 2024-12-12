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
import { useRouter } from 'next/router'

export interface EventContextProps {
  event: Partial<Event>
  guest: Partial<Guest>
  validSlug: boolean

  alterEvent(event: Partial<Event>): void
  alterGuest(guest: Partial<Guest>): void

  loadEvent(idOrSlug: string): Promise<void>
  saveEvent(): Promise<void>

  addGuest(): void
}

const EventContext = createContext<EventContextProps>({} as any)

export function EventContextProvider(props: any) {
  const { httpPost, httpGet } = useAPI()
  const router = useRouter()

  const [validSlug, setValidSlug] = useState(true)

  const [event, setEvent] = useState<Partial<Event>>(createEmptyEvent())
  const [guest, setGuest] = useState<Partial<Guest>>(createEmptyGuest())

  const saveEvent = useCallback(
    async function () {
      try {
        const createEvent = await httpPost('/events', event)
        router.push('/event/success')
        setEvent({
          ...createEvent,
          date: utilsDate.parse(createEvent.date)
        })
      } catch (error) {
        console.error(error)
      }
    },
    [event, httpPost, router]
  )

  const loadEvent = useCallback(
    async function (idOrSlug: string) {
      try {
        const event = await httpGet(`/events/${idOrSlug}`)
        setEvent({
          ...event,
          date: utilsDate.parse(event.date)
        })
        setValidSlug(true)
      } catch (error) {
        console.error(error)
      }
    },
    [httpGet, setEvent]
  )

  const addGuest = useCallback(
    async function () {
      try {
        const createGuest = await httpPost(`/events/${event.slug}/guest`, guest)
        router.push('/invitation/thank-you')
        setGuest(createGuest)
      } catch (error) {
        console.error(error)
      }
    },
    [httpPost, event, guest, router]
  )

  const validateSlug = useCallback(
    async function () {
      try {
        const { valid } = await httpGet(
          `/events/validation/${event.slug}/${event.id}`
        )
        setValidSlug(valid)
      } catch (error) {
        console.error(error)
      }
    },
    [httpGet, event]
  )

  useEffect(() => {
    if (event?.slug) validateSlug()
  }, [event?.slug, validateSlug])

  return (
    <EventContext.Provider
      value={{
        event,
        guest,
        validSlug,
        alterEvent: setEvent,
        alterGuest: setGuest,
        saveEvent,
        loadEvent,
        addGuest
      }}
    >
      {props.children}
    </EventContext.Provider>
  )
}

export default EventContext
