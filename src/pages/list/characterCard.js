import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <Link to={props.to}>
      <div>
        <img src={props.imageURL} />
        <p>{props.name}</p>
      </div>
    </Link>
  );
}

export default CharacterCard;
