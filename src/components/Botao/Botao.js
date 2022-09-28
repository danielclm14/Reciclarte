import {useState} from 'react';
import "./Botao.css"
import PopUp from "../PopUp/PopUp";


export default function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Reservar</button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          <h2>Reserve na tela a seguir</h2>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}

function Box() {
  return (
    <div>
      <PopUp />
    </div>
  );
}
