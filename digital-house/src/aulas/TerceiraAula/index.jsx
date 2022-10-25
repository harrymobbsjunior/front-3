import './style.scss'
import batataGif from './../../assets/images/batata.gif'

export function TerceiraAula() {
    
    const title = "Teste"
    const components = [
        { name:'Título 1', description: 'Teste', image: batataGif },
        { name:'Título 2', description: 'Teste', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },
        { name:'Título 3', description: 'Teste', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },
        { name:'Título 4', description: 'Teste', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },
        { name:'Título 5', description: 'Teste', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },
    ]

    
    return (
        <>
        <div>
            <h1>Lista de componentes encontrados em um sistema</h1>
            <ul>
                {
                    // laço de repetição
                    components.map(component => (
                
                        <li>
                            <h1>{ component.name }</h1>
                            <img src={ component.image } alt="" />
                            <h2>{ component.description }</h2>
                        </li>
                        
                    ))
                }

            </ul>
        </div>
        </>
    )

}