'use client'
import { events, type Guest } from 'core'
import { use, useCallback, useEffect, useState } from 'react'
import { Event } from 'core'
import EventDashboard from '@/components/event/event-dashboard'
import FormEventPassword from '@/components/event/form-event-password'
import useAPI from '@/data/hooks/useAPI'
interface Params {
  all: string[]
}

const AdminEvent = (props: any) => {

  const { httpPost } = useAPI()

  const params: Params = use(props.params)
  const id = params.all[0]
  const [event, setEvent] = useState<Event | null>(null)
  const [password, setPassword] = useState<string>(params.all[1] || "")

  const presence = event?.guests.filter(g => g.confirmation) ?? []
  const absent = event?.guests.filter(g => !g.confirmation) ?? []
  const totalGeral =
    presence?.reduce((total: number, guest: Guest) => {
      return total + guest.quantityCompanions + 1
    }, 0) ?? 0

  const loadEvent = useCallback(() => {
    const event = events.find(
      event => event.id === id && event.password === password
    )
    setEvent(event ?? null)
    setPassword(password ?? null)
  }, [id, password])

  const getEvent = useCallback(async () => {
    if (!id || !password) return
    const event = await httpPost('events/access', { id, password })
    setEvent(event)
  }, [httpPost, id, password])

  useEffect(() => {
    loadEvent()
  }, [loadEvent, id])

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <EventDashboard
          event={event}
          presence={presence}
          absent={absent}
          totalGeral={totalGeral}
          reloadGuestList={getEvent}
        />
      ) : (
          <FormEventPassword
            accessEvent={getEvent}
            password={password}
            setPassword={setPassword}
          />
      )}
    </div>
  )
}

export default AdminEvent
