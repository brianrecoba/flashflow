import { classMerge } from "../utils/classMerge"

type Props = React.ComponentProps<'button'> & {
    isLoading?: boolean;
    variant?: 'default' | "cancel" | "delete" | "save"
    className?: string;
}

const variants = {
    button: {
        "default": 'w-37.5 h-10 bg-primary rounded-full text-white font-monrape font-bold text-[14px] cursor-pointer',
        "cancel": '',
        "delete": '',
        "save": ''
    }
}


export function Button({ children, isLoading, type='button', variant = "default", className,...rest  }: Props) {
    return (
        <button
          type={type}  
          {...rest}
          disabled = {isLoading}
          className={classMerge([variants.button[variant], className])}
          >
            {children}
        </button>
    ) 
}