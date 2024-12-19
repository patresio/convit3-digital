import { useContext } from 'react'
import ContextMessage from '../contexts/context-message'

const useMessages = () => useContext(ContextMessage)

export default useMessages
