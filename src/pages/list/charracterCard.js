import { Link } from "react-router-dom"
function CharaterCard(props) {
    return (
        <Link to={`/characters/${props.id}`} >
        <div>
            <img src={props.imageURL}/>
            <p>{props.name}</p>
        </div>
        </Link>
    )
}
export default CharaterCard