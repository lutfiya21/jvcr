import { useState } from "react";
import { useNavigate } from "react-router";

function AuctionForm() {
  const [nameInp, setInpName] = useState(""); // State yaratish
  const [costInp, setCostInp] = useState(0);
  const [err, SetErr] = useState("");
  const navigate = useNavigate();

  const onSend = (e) => {
    e.preventDefault();
    if (costInp < 10000) {
      SetErr("10 ming AQSH $ dan kam tikseng saytdan chiqib ket!");
      return;
    } else {
      SetErr("");
    }

    console.log(nameInp);
    console.log(costInp);
    navigate("/about");
  };

  return (
    <form onSubmit={onSend}>
      <label>
        Mashina nomi:
        <input
          type="text"
          required
          value={nameInp}
          onChange={(e) => {
            setInpName(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Sizning taklifingiz dollarda $:
        <input
          value={costInp}
          onChange={(e) => {
            setCostInp(e.target.value);
          }}
          type="number"
        />
      </label>
      <br />
      {err && <span style={{ color: "red" }}>{err}</span>}
      <br />
      <input type="submit" value="Taklif etish" />
    </form>
  );
}

export default AuctionForm;
