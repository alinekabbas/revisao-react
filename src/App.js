import { useState } from "react";
import Header from "./components/Header/Header";
import {PrincipalContainer} from "./Style"

function App() {
  //remetente atual
  const [currSender, setCurrSender] = useState("Me")

  //possiveis remetentes
  const [senders, setSenders] = useState([
    "Me",
    "Fulano",
    "Beltrana",
    "Ciclano",
    "Astrodev"
  ])

  //mudar o remetente atual
  const onChangeSender = (e) => {
    setCurrSender(e.target.value)
  }

  return (
    <PrincipalContainer >
      <Header
        senders={senders}
        currSender={currSender}
        onChangeSender={onChangeSender}
      />
    </PrincipalContainer>
  );
}

export default App;

