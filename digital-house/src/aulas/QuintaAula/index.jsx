import { QuintaAulaItem } from '../../components/QuintaAulaItem'
import './style.scss'
import batataGif from './../../assets/images/batata.gif'
// npm run dev

export function QuintaAula() {
    return (
        <>
            
            <div className='quinta-aula-component'>
                <h1 className='main-title'>Componentes Identificados - Quinta Aula</h1>
                <ul className='components-finded'>
                    <QuintaAulaItem />
                </ul>
            </div>

        </>
    )
}
