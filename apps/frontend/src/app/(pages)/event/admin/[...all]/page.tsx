'use client'
import { events, type Guest } from 'core'
import { use, useCallback, useEffect, useState } from 'react'
import { Event } from 'core'
import EventDashboard from '@/components/event/event-dashboard'
import FormEventPassword from '@/components/event/form-event-password'
interface Params {
  all: string[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminEvent = (props: any) => {
  const params: Params = use(props.params)
  const id = params.all[0]
  const [event, setEvent] = useState<Event | null>(null)
  const [password, setPassword] = useState<string | null>(params.all[1] || null)

  const presence = event?.guests.filter(g => g.confirmation) ?? []
  const absent = event?.guests.filter(g => !g.confirmation) ?? []
  const totalGeral =
    presence?.reduce((total: number, guest: Guest) => {
      return total + guest.quantityCompanions + 1
    }, 0) ?? 0

  const getEvent = useCallback(() => {
    const event = events.find(
      event => event.id === id && event.password === password
    )
    setEvent(event ?? null)
    setPassword(password ?? null)
  }, [id, password])

  useEffect(() => {
    getEvent()
  }, [getEvent, id])

  console.log(event)

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <EventDashboard
          event={event}
          presence={presence}
          absent={absent}
          totalGeral={totalGeral}
        />
      ) : (
        <FormEventPassword />
      )}
    </div>
  )
}

export default AdminEvent
