import { useState } from "react";
import Header from "./header/Header";
import Userlist from "./userlist/Userlist";


function App() {
  const [bg, setbg] = useState("aliceblue");
  const [color, setColor] = useState("black");

  const handlemode = () => {
    if (bg === "aliceblue") {
      setbg("#333");
      setColor("white");
    } else {
      setbg("aliceblue");
      setColor("black");
    }
  };
  return (
    <>
      <Header bg={bg} handlemode={handlemode} />
      <Userlist bg={bg} color={color} />
    </>
  );
}

export default App;
