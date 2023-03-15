import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "./characterCard";

function ListRoute() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setData(response.data.results);
    });
  }, []);

  return (
    <div className="p-10 space-y-8">
      <h1>Rick and Morty multfilimidagi qahramonlar royxati:</h1>
      <div className="grid grid-cols-4 gap-10">
        {data.length != 0 &&
          data.map((character) => {
            return (
              <CharacterCard
                key={character.id}
                to={`/characters/${character.id}`}
                imageURL={character.image}
                name={character.name}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ListRoute;
