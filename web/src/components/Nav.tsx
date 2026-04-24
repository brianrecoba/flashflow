import Logo from '../assets/logo.svg'
import { Button } from './Button'
export function Nav() {
    return (

        <div className='w-full flex flex-col '>
            <div className='flex justify-between'>
                <img src={Logo} alt="Logo" />
                <Button variant='default'>Novo Flashflow</Button>
            </div>
            <div className='w-full mt-10 flex flex-col gap-2 justify-center'>
                <div>
                    <p className='text-primary font-inter font-bold text-[10.4px]'>PAINEL DE APRENDIZADO</p>
                </div>
                <div className='flex justify-between '>
                    <h1 className='uppercase font-monrape font-extrabold text-4xl text-text-primary'>Domine tecnologia com foco total.</h1>
                    <div className='flex items-center justify-center w-[468px] h-15 bg-background-gray rounded-full'>AQUI VAI O FILTER</div>
                </div>
            </div>

        </div>

    )
}