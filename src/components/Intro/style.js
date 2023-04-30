import styled from "styled-components";

export const SectionIntro = styled.section`
    height: 75vh;
    color: var(--color-text2);
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    font-family: 'Inter', sans-serif;

    &>img{
        max-width: 30vw;
        object-fit:scale-down;
    }

    @media(max-width: 800px){
        flex-direction: column-reverse;
        align-items: center;
        &>img{
            max-width:50vw;
        }
    }
`

export const IntroText= styled.div`
    width:30vw;
    display: flex;
    flex-direction: column;
    justify-content:center;
    &>h4{
        color: var(--color-primary);
        margin: 10px 0;
        font-weight: bold;
        font-size:2rem;
    };
    &>h3{
        font-weight: bold;
        font-size: 2rem;
    }

    @media(max-width: 800px){
        width: 80vw;
    }
`