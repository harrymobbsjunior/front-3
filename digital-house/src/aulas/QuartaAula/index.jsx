import './style.scss'
import batataGif from './../../assets/images/batata.gif'
// npm run dev

export function QuartaAula() {
    return (
        <>
            <div className='quarta-aula-component'>
                <h1 className='main-title'>Componentes Identificados - Quarta Aula</h1>
                <ul className='components-finded'>
                    <li>
                        <img src={batataGif} alt="" />
                        <h1>Vídeo</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, adipisci.</p>
                    </li>
                </ul>
            </div>

        </>
    )
}
