import styled from "styled-components";

export const SectionServicos= styled.section`
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-primary-light);
    color: var(--color-text);
    box-shadow: -5px -10px 10px var(--color-primary-light), -5px 10px 10px var(--color-primary-light);
    font-family: 'Inter', sans-serif;
    
    &>h2{
        margin-top:10px;
    }
`

export const ServicosContainer= styled.ul`
    min-height: 50vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    overflow-x: scroll;
    list-style-type:none;

    @media(max-width: 800px){
        justify-content: flex-start;
        padding:0 20px;
    }
`

export const ServicoCard = styled.li`
    width: 15vw;
    min-width:260px;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 10px;
    outline: 4px solid var(--color-secondary);
    background-color: var(--color-background);
    box-shadow: 5px 5px 5px gray;
    &>span{
        color: var(--color-primary);
        font-size: 75px;
    }

    @media(max-width: 800px){
        min-width:250px;
    }
`

export const ServicoCardContent= styled.div`
    color: var(--color-primary);
`