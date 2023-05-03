import styled from "styled-components";

export const UlSectionMain = styled.ul`
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const LowContainer= styled.li`
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 33vw;
    font-size: 2.5rem;

    &>h3,span{  
        font-family: sans-serif;
    }

    &:hover{
        background-color: rgba(100, 100, 100, 0.9);
        transition: 0.5s;
    }

    @media(max-width: 800px){
        text-align: center;
        font-size: 1.8rem;
    }

    @media(max-width: 360px){
    
        &>h3,span{
            font-size: 1.3rem;
        }
    }
`
export const LowContainerMid= styled.li`
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 33vw;
    font-size: 2.5rem;

    &>h3,span{  
        font-family: sans-serif;
    }

    &:hover{
        background-color: rgba(100, 100, 100, 0.9);
        transition: 0.5s;
    }

    @media(max-width: 800px){
        text-align: center;
        font-size: 1.8rem;
    }

    @media(max-width: 360px){
    
        &>h3,span{
            font-size: 1.3rem;
        }
    }
`