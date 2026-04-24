import { classMerge } from "../utils/classMerge"

type Props = React.ComponentProps<'button'> & {
    isLoading?: boolean;
    variant?: 'default' | "cancel" | "delete" | "save"
    className?: string;
}

const variants = {
    button: {
        "default": 'w-37.5 h-10 bg-primary',
        "cancel": "bg-button-cancel",
        "delete": ' bg-button-delete',
        "save": 'bg-primary'
    }
}


export function Button({ children, isLoading, type='button', variant = "default", className,...rest  }: Props) {
    return (
        <button
          type={type}  
          {...rest}
          disabled = {isLoading}
          className={classMerge(["flex items-center justify-center w-55.5 h-13 rounded-full text-white font-monrape font-bold text-[14px] cursor-pointer",variants.button[variant], className])}
          >
            {children}
        </button>
    ) 
}