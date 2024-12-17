import PageTemplate from '@/components/template/page'
import { PropsWithChildren } from 'react'
import { EventContextProvider } from '@/data/contexts/event-context'

const Layout = (props: PropsWithChildren<unknown>) => {
  return (
    <EventContextProvider>
      <PageTemplate>{props.children}</PageTemplate>
    </EventContextProvider>
  )
}

export default Layout
