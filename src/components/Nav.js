import { Link } from "react-router-dom";

  

function Nav(){
  const onTun = ()=> {
    localStorage.setItem("mode", "tun")
  }
  const onKun = ()=>{
    localStorage.setItem("mode", "kun")
  }



  return (
    <div className="space-x-10 bg-blue-300 p-4 flex justify-between">
      <>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/characters"}>Characters</Link>
      <Link to={"/games"}>Games</Link> 
      <Link to={"/games/edit"}>Edit</Link>
      
         </>
         <div className="space-x-4">
          <button onClick={onTun} className="bg-black text-white p-2">tun</button>
          <button onClick={onKun} className="bg-gray-300">kun</button>
         </div>
    </div>
  );
}

export default Nav;
