import { Event } from 'core'
import QRCode from 'react-qr-code'

export interface AccessViaQrCodeProps {
  event: Event
}
const AccessViaQrCode = (props: AccessViaQrCodeProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-zinc-800 px-10">
      <span className="text-sm font-light text-zinc-400">
        Acesse via Mobile
      </span>
      <QRCode
        value={JSON.stringify({
          id: props.event.id,
          password: props.event.password
        })}
        size={100}
      />
    </div>
  )
}

export default AccessViaQrCode
