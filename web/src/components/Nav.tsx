import Logo from '../assets/logo.svg'
import { Button } from './Button'
export function Nav() {
    return (

        <div className='w-full flex flex-col'>
            <div className='flex justify-between'>
                <img src={Logo} alt="Logo" />
                <Button variant='default'>Novo Flashcard</Button>
            </div>

        </div>

    )
}