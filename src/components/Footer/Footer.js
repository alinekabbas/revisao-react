import { FooterContainer } from "./Footer.styled";
import smiley from "../../assets/smiley.svg"
import paperclip from "../../assets/paperclip.svg"
import microphone from "../../assets/microphone.svg"
import { useState } from "react";

function Footer(props){
    const { sendMessage } = props

    const [text, setText] = useState("")

    const onChangeText=(e)=> {
        setText(e.target.value)
    }
    // callback de limpeza do text
    // const clearText = () => {
    //     setText("")
    // }

    const handleMessage = (e) => {
        if (e.key === "Enter") {
            sendMessage(text)
            setText("")
        }
    }

    return(
        <FooterContainer>
            <div>
                <button className="emoji">
                    <img src={smiley} alt="Emoji icon"/>
                </button>

                <input 
                value={text}
                onChange={onChangeText}
                placeholder="Type a message"
                // onKeyDown com callback
                // onKeyDown={(e) => sendMessage(e, text, clearText)}
                onKeyDown={handleMessage}
                >
                </input>

                <button className="paperclip">
                    <img src={paperclip} alt="Append icon"/>
                </button>
            </div>

            <button className="microphone">
            <img src={microphone} alt="Microphone icon"/>
            </button>
        </FooterContainer>

    )
}
export default Footer