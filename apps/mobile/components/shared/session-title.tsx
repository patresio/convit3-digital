import { fontBold, py4, selfStart, textXl, textZinc400 } from '@/style'

import { Text } from 'react-native'

export interface SessionTitleProps {
  text: string
}

export default function SessionTitle(props: SessionTitleProps) {
  return (
    <Text style={[textXl, fontBold, textZinc400, py4, selfStart]}>
      {props.text}
    </Text>
  )
}
