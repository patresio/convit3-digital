import { IconCopy } from '@tabler/icons-react'
import type React from 'react'

export interface CopyClipboardProps {
  icon: React.ElementType
  label: string
  text: string
  observation?: string
}

const CopyClipboard = (props: CopyClipboardProps) => {
  function copyText() {
    navigator.clipboard.writeText(props.text)
  }

  return (
    <div className="flex flex-col gap-2">
      <span>{props.label}</span>
      <div>
        <span>{props.text}</span>
        <IconCopy className="cursor-pointer" stroke={1.3} onClick={copyText} />
      </div>
      {props.observation && (
        <span className="text-xs text-yellow-300/80">{props.observation}</span>
      )}
    </div>
  )
}

export default CopyClipboard
