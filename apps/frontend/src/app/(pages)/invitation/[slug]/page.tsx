"use client"

import EventInformation from "@/components/event/event-information"
import GuestForm from "@/components/event/guest-form"
import Proccessing from "@/components/shared/proccessing"
import Window from "@/components/shared/window"
import useEventContext from "@/data/hooks/useEvent"
import { Event } from "core"
import { use, useEffect } from 'react';


const Invitation = (props: any) => {

  const params: any = use(props.params)
  
  const { event, guest, alterGuest, saveGuest, loadEvent } = useEventContext()

  useEffect(() => {
    loadEvent(params.slug)
  }, [params.slug, loadEvent])

  return event?.slug ? (
    <div>
      <Window
        label="Você foi convidado para um evento:"
        title={event.name}
        image={event.image}
        background={event.bgImage}
      >
        <EventInformation event={event as Event} hiddenName />
        <div className="flex flex-col gap-6 py-4 px-6 border rounded-lg border-zinc-800 mt-2">
          <span className="text-xl font-bold text-zinc-400">
            Insira seus dados:
          </span>
          <div className="border-t border-zinc-800"></div>
          <GuestForm guest={guest} changeGuest={alterGuest} />
          <button
            className={`button self-center ${guest.confirmation ? 'tertiary' : 'secondary'}`}
            onClick={saveGuest}
          >
            Confirmar {guest.confirmation ? 'Presença' : 'Ausência'}
          </button>
        </div>
      </Window>
    </div>
  ) : (
    <Proccessing />
  )
}

export default Invitation
