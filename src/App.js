import { useState } from "react";
import { initialMessages } from "./assets/inicialMessages";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
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

  // deletar mensagem

  // tenho uma lista de mensagens
  // vou clicar duas vezes em cima de uma
  // vai perguntar se é para deletar
  // se der ok, a mensagem clicada será deletada da lista
  // se der cancel, não acontece nada

  const deleteMessage = (idToDelete) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      const newMessages = [...messages] // precisamos fazer uma cópia para não ferir a regra de estado do react

      const indexToDelete = newMessages.findIndex(
        (message) => message.id === idToDelete // retorna um booleano
        // se true, é porque encontrou o item e o findIndex retorna o índice encontrado
        // se false, pula para o próximo item da lista
        // caso encerre a iteração da lista e não encontre o item, retorna -1
      )
      if (indexToDelete > -1) { // se encontrou o item, o índice será sempre maior que -1
        newMessages.splice(indexToDelete, 1)
        setMessages(newMessages)
      }
    }
  }

  // enviar mensagem com callback
  // const sendMessage = (e, text, cbClearText) => {
  //     if (e.key === "Enter") {
  //         const newMessage = {
  //             id: `${currSender}-${Math.ceil(Math.random() * 100000)}`,
  //             sender: currSender,
  //             content: text,
  //             createdAt: new Date()
  //                 .toLocaleTimeString(
  //                     "en-US",
  //                     {
  //                         hour: "numeric",
  //                         minute: "numeric",
  //                         hour12: true
  //                     }
  //                 ) // cria uma data no tempo atual
  //         }

  //         const newMessages = [...messages, newMessage]
  //         setMessages(newMessages)
  //         cbClearText()
  //     }
  // }


  const sendMessage = (text) => {
    const newMessage = {
      id: `${currSender}-${Math.ceil(Math.random() * 100000)}`,
      sender: currSender,
      content: text,
      createdAt: new Date()
        .toLocaleTimeString(
          "en-US",
          {
            hour: "numeric",
            minute: "numeric",
            hour12: true
          }
        ) // cria uma data no tempo atual
    }

    const newMessages = [...messages, newMessage]
    setMessages(newMessages)
  }


  return (
    <PrincipalContainer >
      <Header
        senders={senders}
        currSender={currSender}
        onChangeSender={onChangeSender}
      />

      <Main
        messages={messages}
        deleteMessage={deleteMessage}
      />

      <Footer sendMessage={sendMessage} />
    </PrincipalContainer>
  );
}

export default App;

