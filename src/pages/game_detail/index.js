import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function GameDetailRoute() {
  const { gameId } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:3000/games/${gameId}`).then((response) => {
      setData(response.data);
    });
  }, []);

  const onDelete = () => {
    axios.delete(`http://localhost:3000/games/${gameId}`).then(() => {
      navigate("/games")
    })
  }

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
        <h1>{data.title}</h1>
        <h2>{data.description}</h2>
        <img src={data.imageURL} />
      </div>
      <Link to={`/games/edit/${gameId}`}>Edit</Link>
      <button onClick={()=> setModalIsOpen(true)} 
      className="bg-red-900 w-32 px-4 py-7 text-red-200">Delete</button>
      <div>
        <Modal style={customStyles} isOpen={modalIsOpen}>
          <h1>o'chirishga ishonchingiz komilmi</h1>
          <div className="space-x-4 mt-10 float-right">
            <button className="bg-green-400 px-6 py-2 rounded" 
            onClick={()=>setModalIsOpen(false)}>
              yoq
            </button>
            <button className="bg-red-400 px-6 py-2 rounded" onClick={onDelete} >
              ha
            </button>
          </div>
        </Modal>
      </div>

    </>
  );
}

export default GameDetailRoute;
