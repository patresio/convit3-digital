import PageTemplate from '@/components/template/page'
import { PropsWithChildren } from 'react'

const Layout = (props: PropsWithChildren<unknown>) => {
  return <PageTemplate>{props.children}</PageTemplate>
}

export default Layout
