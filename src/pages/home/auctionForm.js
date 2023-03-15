import { useState } from "react"
import { useNavigate } from "react-router-dom";

function AuctionForm() {
    const [nameInp, setInpName]= useState(""); //State yaratish
    const [amountInp, setAmountInp]= useState(0)
    const [err, SetErr]= useState("")
    const navigate = useNavigate()



    const onsend = (e) => {
        e.preventDefault();
        if(amountInp < 10000) {
            SetErr("10 ming AQSh $ dan kam tiksang saytdan chiqib ket!")
            return;
        } else {
            SetErr("")
        }
        console.log(nameInp)
        console.log(amountInp)
        navigate("/about")
        }
    
    return (
        <form onSubmit={onsend}>
            <label>
                Mashina nomi:
                <input type="text" value={nameInp} required 
                onChange={(e) =>{
                    setInpName(e.target.value);
                }}/>
            </label>
            <br/>
            <label>
                Sizning taklifingiz dollarda $:
                <input type="number" value={amountInp}
                onChange={(e) =>{
                    setAmountInp(e.target.value)}}/>
            </label>
            <br/>
            {err && <span style={{ color: "red"}}>{err}</span>}
            <br />
            <input type="submit" value="Taklif etish" />
        </form>
    )
                }         
export default AuctionForm