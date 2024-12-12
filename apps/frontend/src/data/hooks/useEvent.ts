import { useContext } from 'react'
import EventContext from '../contexts/event-context'

const useEventContext = () => useContext(EventContext)
export default useEventContext
