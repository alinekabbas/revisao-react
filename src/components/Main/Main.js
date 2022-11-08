import { MainContainer, ChatBalloon } from "./Main.styled"
import tickDouble from "../../assets/tickDouble.svg"
import tickDoubleWhite from "../../assets/tickDoubleWhite.svg"

function Main(props) {
    const { messages } = props

    return (
        <MainContainer>
            {messages.map((message) => (
                <div>
                    <ChatBalloon sender={message.sender}>
                        {message.sender !== "Me" && <h1>{message.sender}</h1>}
                        <p>{message.content}</p>
                        <div>
                            <span>{message.createdAt}</span>
                            {
                                message.sender === "Me"
                                    ? <img src={tickDoubleWhite} alt="tickDoubleWhite" />
                                    : <img src={tickDouble} alt="tickDouble" />
                            }
                        </div>

                    </ChatBalloon>
                </div>
            ))}
        </MainContainer>

    )
}

export default Main