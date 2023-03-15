import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";

function DetailRoute() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setData(response.data);
      });
  }, []);

  if (data == null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ReactLoading type={"bars"} color={"rgb(100, 77, 67)"} width={100} />
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>{data.name}</h1>
        <h2>{data.species}</h2>
        <img src={data.image} />
      </div>
    </>
  );
}

export default DetailRoute;
