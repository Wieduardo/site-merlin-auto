import styled from "styled-components";

export const UlSectionMain = styled.ul`
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: 'Inter', sans-serif;
`
export const LowContainer= styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 33vw;

    &:hover{
        background-color: rgba(100, 100, 100, 0.9);
        transition: 0.5s;
    }

    @media(max-width: 800px){
        text-align: center;
    }
`
export const LowContainerMid= styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 33vw;

    &:hover{
        background-color: rgba(100, 100, 100, 0.9);
        transition: 0.5s;
    }

    @media(max-width: 800px){
        text-align: center;
    }
`