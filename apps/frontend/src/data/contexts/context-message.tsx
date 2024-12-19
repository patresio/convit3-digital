"use client"

import { useToast } from "@/data/hooks/useToast";
import { createContext, useCallback } from "react";

export interface ContextMessageProps {
  addSuccess: (message: string) => void
  addError: (message: string) => void
}

const ContextMessage = createContext<ContextMessageProps>({} as any)

export function ProviderContextMessage(props: any) {

    const { toast } = useToast()

  const addMessage = useCallback(function (type: 'success' | 'error', message: string) {
      toast({
        title:
          type === 'success' ? 'Tudo certo por aqui!' : 'Ops, algo deu errado',
        description: message.split('\n').map((m, i) => <p key={i}>{m}</p>),
        variant: type === 'success' ? 'default' : 'destructive'
      })
    }, [toast])

    return (
      <ContextMessage.Provider value={{
        addSuccess: (message: string) => addMessage('success', message),
        addError: (message: string) => addMessage('error', message),
      }}>
        {props.children}
      </ContextMessage.Provider>
    )
  }

export default ContextMessage