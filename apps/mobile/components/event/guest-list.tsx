import { Text, View } from 'react-native'
import {
  border,
  borderZinc800,
  gapY4,
  px4,
  py2,
  roundedMd,
  textLg,
  textSm,
  textWhite,
  textZinc400
} from '@/style'

import type { Guest } from 'core'

export interface GuestListProps {
  guests: Guest[]
}

const GuestList = (props: GuestListProps) => {
  return (
    <View>
      {props.guests && props.guests.length > 0 ? (
        <View style={[gapY4]}>
          {props.guests.map((guest: Guest) => (
            <View
              key={guest.id}
              style={[border, borderZinc800, roundedMd, px4, py2]}
            >
              <Text style={[textWhite, textLg]}>{guest.name}</Text>
              <Text style={[textZinc400, textSm]}>{guest.email}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={[textZinc400]}>Ninguém por aqui ainda...</Text>
      )}
    </View>
  )
}

export default GuestList
