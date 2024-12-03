import { useContext } from 'react'
import EventsContext from '../contexts/events-context'

const useEvents = () => useContext(EventsContext)

export default useEvents
