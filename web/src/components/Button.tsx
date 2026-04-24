import React from 'react'

type Props = React.ComponentProps<'button'> & {
  isDefault?: boolean 
  children?: React.ReactNode
}


export function Button({ isDefault = true, children, ...props }: Props) {
    return (
        <button  {...props}>
            {children}
        </button>
    ) 
}