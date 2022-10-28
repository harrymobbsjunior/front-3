import './style.scss'
// npm run dev

export function DHGamesItemRow(props) {
    return (
        <>
            {console.log(props)}

            <div className="DHGamesItemRow">
                <img className="thumb" src={props.item.picture} alt="" />
                <ul>
                    <li><h2>{props.item.name}</h2></li>
                    <li> {props.item.plataforms}</li>
                    <li> {props.item.categories}</li>
                </ul>
                <p className="price">{props.item.price}</p>

            </div>

        </>
    )
}
