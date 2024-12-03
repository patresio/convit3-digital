import {
  alignCenter,
  bgZinc900,
  fontBold,
  p4,
  roundedMd,
  textCenter,
  textLg,
  textWhite,
  textXs,
  textZinc400,
  w9_10,
  wFull
} from '@/style'
import { Event } from 'core'
import { View, Text, Image } from 'react-native'

export interface CardEventProps {
  event: Event
}

const CardEvent = (props: CardEventProps) => {
  return (
    <View style={[bgZinc900]}>
      <Image
        source={{ uri: props.event.image }}
        style={[{ height: 150 }, wFull, roundedMd]}
      />
      <View style={[p4, alignCenter]}>
        <Text style={[textWhite, fontBold, textLg, textCenter]}>
          {props.event.name}
        </Text>
        <Text style={[textZinc400, textCenter, textXs, w9_10]}>
          {props.event.description}
        </Text>
      </View>
    </View>
  )
}

export default CardEvent
