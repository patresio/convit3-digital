'use client'
import AccessViaQrCode from '@/components/event/access-via-qr-code'
import EventInformation from '@/components/event/event-information'
import CopyClipboard from '@/components/shared/copy-clipboard'
import Window from '@/components/shared/window'
import useEventContext from '@/data/hooks/useEvent'
import { IconFingerprint, IconLink } from '@tabler/icons-react'
import type { Event } from 'core'
import { useEffect, useState } from 'react'

const PageEventSuccess = () => {
  const { event } = useEventContext()

  const [urlActual, setUrlActual] = useState("")

  useEffect(() => {
    setUrlActual(window.location.origin)
  }, [])

  return event ? (
    <Window
      label="Seu evento foi criado:"
      title={event.name}
      image={event.image}
      background={event.bgImage}
    >
      <EventInformation hiddenName event={event as Event} />
      <div className="flex gap-5 items-center py-6">
        <div className="flex flex-col flex-1 gap-5">
          <CopyClipboard
            icon={IconLink}
            label="Link para convidar"
            text={`${urlActual}/invitation/${event.slug}`}
          />
          <CopyClipboard
            icon={IconLink}
            label="Link para area administrativa"
            text={`${urlActual}/event/admin/${event.id}`}
          />
          <CopyClipboard
            icon={IconFingerprint}
            label="Senha administrador"
            text={event.password ?? ''}
            observation="Essa senha nao será exibida novamente, então guarde-a com cuidado!"
          />
        </div>
        <AccessViaQrCode event={event as Event} />
      </div>
    </Window>
  ) : null
}

export default PageEventSuccess
