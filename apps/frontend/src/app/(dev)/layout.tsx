import PageTemplate from '@/components/template/page'
import { EventContextProvider } from '@/data/contexts/event-context'
import { PropsWithChildren } from 'react'

const Layout = (props: PropsWithChildren<unknown>) => {
  return <EventContextProvider><PageTemplate>{props.children}</PageTemplate></EventContextProvider>
}

export default Layout
