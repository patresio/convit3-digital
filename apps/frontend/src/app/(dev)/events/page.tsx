import { events } from 'core'
import Image from 'next/image'
import Link from 'next/link'
import QRCode from 'react-qr-code'

const eventsPage = () => {

  return (
    <div className="grid grid-cols-3 gap-5">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex flex-col bg-zinc-700 overflow-hidden rounded-lg w-full"
        >
          <div className="relative w-full h-52">
            <Image
              src={event.image}
              alt={event.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col p-7 gap-4 items-center text-center">
            <span className="text-lg font-black">{event.name}</span>
            <p className="flex-1 text-sm text-zinc-400">{event.description}</p>
            <QRCode
              value={JSON.stringify({ id: event.id, password: event.password })}
              size={100}
            />
            <div className="flex gap-5">
              <Link
                href={`/event/admin/${event.id}/${event.password}`}
                className="button secondary flex-1"
              >
                Admin
              </Link>
              <Link
                href={`/invitation/${event.slug}`}
                className="button tertiary flex-1"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default eventsPage
