import { useState } from "react";
import { initialMessages } from "./assets/inicialMessages";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { PrincipalContainer } from "./GlobalStyle"

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

  const [messages, setMessages] = useState(initialMessages)

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

      <Main messages={messages} />
    </PrincipalContainer>
  );
}

export default App;

