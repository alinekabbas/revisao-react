import styled from "styled-components";

export const MainContainer = styled.main`
    background-color: #F1F4F7;
    flex-grow: 1;
    padding: 16px;    
`

export const ChatBalloon = styled.div`
    min-width: 80px;
    max-width: 300px;
    border-radius: 10px;
    padding: 8px;
    margin-bottom: 16px;

    margin-left: ${(props) => props.sender === "Me"? "auto" : 0};
    color: ${(props) => props.sender === "Me"? "white" : "black"};
    background-color: ${(props) =>props.sender === "Me"? "#61C554":"#E8ECEF" };

    h1{
        font-size: 16px;
    }

    p{
        font-weight: 400;
        font-size: 14px;
        margin-top: 4px;
        overflow-wrap: break-word;
    }

    div{
        text-align: right;
        
        span{
            color: ${(props) => props.sender === "Me" ? "white" : "#727272"};
            font-weight: 400;
            font-size: 11px;
        }

        img {
            margin-left: 4px;
        }
    }

    
    
   
`
