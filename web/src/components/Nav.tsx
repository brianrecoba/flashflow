import Logo from '../assets/logo.svg'
import { Button } from './Button'
export function Nav() {
    return (

        <div className='w-full flex flex-col'>
            <div className='flex justify-between'>
                <img src={Logo} alt="Logo" />
                <Button className='w-37.5 h-10 bg-primary rounded-full text-white font-monrape font-bold text-[14px] cursor-pointer'>Novo Flashcard</Button>
            </div>

        </div>

    )
}