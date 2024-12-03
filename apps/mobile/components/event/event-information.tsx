import { Event } from 'core'
import Information from '../shared/information'
import { View } from 'react-native'
import { gapY2 } from '@/style'

export interface EventInformationProps {
  event: Event
}

const EventInformation = (props: EventInformationProps) => {
  return (
    <View style={[gapY2]}>
      <Information label="Nome">{props.event.name}</Information>
      <Information label="Data">
        {new Date(props.event.date!).toLocaleDateString('pt-BR')}
        {' às '}
        {new Date(props.event.date!).toLocaleTimeString('pt-BR')}
      </Information>
      <Information label="Local">{props.event.location}</Information>
      <Information label="Descrição">{props.event.description}</Information>
    </View>
  )
}

export default EventInformation
