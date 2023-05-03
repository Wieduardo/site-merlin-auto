import styled from "styled-components";

export const SectionServicos= styled.section`

    height: 55vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-primary-light);
    color: var(--color-text);
    box-shadow: -5px -10px 10px var(--color-primary-light), -5px 10px 10px var(--color-primary-light),5px -10px 10px var(--color-primary-light), 5px 10px 10px var(--color-primary-light);
    font-family: primaryFont;

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

    @media(max-width: 360px){
        padding: 0px 20px;
        overflow-y: scroll;
    }
`

export const ServicoCard = styled.li`
    width: 15vw;
    padding: 20px 20px;
    min-width:260px;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    text-align: center;
    border-radius: 10px;
    outline: 4px solid var(--color-tertiary);
    background-color: var(--color-background);
    box-shadow: 5px 5px 5px gray;

    &>span{
        color: var(--color-primary);
        font-size: 75px;
    }

    @media(max-width: 800px){
        min-width:250px;
    }

    @media(max-width: 360px){
        min-width: 150px;
        outline: none;

        &>span{
            font-size: 40px;
            margin: 0 10px;
        }
    }
`

export const ServicoCardContent= styled.div`
    color: var(--color-primary);
    font-size: 1.4rem;

    &>h2{
        margin: 5px 0;
        color: var(--color-text2);
        font-family: sans-serif;
        font-weight: bold;
    }

    &>span{
        text-align: justify;
        font-family: sans-serif;
    }

    @media(max-width: 800px){
        
        &>span{
            font-size: 1.1rem;
            word-wrap: break-word;
            white-space: pre-wrap;
            word-break: break-word;
        }

    }

    @media(max-width: 360px){

        &>h2{
            font-size: 1.1rem;
        }

        &>span{
            font-size: 1rem;
            word-wrap: break-word;
            white-space: pre-wrap;
            word-break: break-word;
        }
    }
`