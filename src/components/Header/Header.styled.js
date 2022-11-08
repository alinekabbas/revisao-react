import styled from "styled-components"

export const HeaderContainer = styled.header`
    width: 45vw;
    height: 80px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    font-size: 12px;
    color: lightgrey;
`

export const SelectUsers = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;        
`
export const Select = styled.select`
    border-style: none;
    font-weight: 700;
    font-size: 16px;
`

export const HeaderIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 135px;
`
export const ProfilePhoto = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
`
export const Icons = styled.button`
    border-radius: 50%;
    border-style: none;
    background-color: #F8F8F8;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    :hover{
        cursor: pointer;
        filter: brightness(0.95);
    }

    :active{
        filter: brightness(0.85);
    }
`