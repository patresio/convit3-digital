import React from 'react'

export interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {
  label?: string
  value: string | number
  type?: string
  onChange: (event: any) => void
  description?: string
  observation?: string
  error?: string
}

const InputField = (props: InputFieldProps) => {
  return ( 
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col'>
      {props.label && <label className='text-lg font-black text-white'>{props.label}</label>}
      {props.description && <span className='text-sm text-zinc-400 font-light -mt-1'>{props.description}</span>}
      </div>
      <input
        type={props.type ?? 'text'}  {...props}
        className='w-full px-3 py-2 border rounded-md bg-black/50 border-white/20 focus:border-white/50 '
      />
      {props.error && (<span className='pl-2 text-sm text-red-500 font-bold'>{props.error}</span>)}
      {props.observation && (<span className='pl-2 text-xs text-yellow-200'>{props.observation}</span>)}
    </div>
   );
}
 
export default InputField;