import styled from "styled-components";

export const FooterContainer= styled.footer`
    min-height: 35vh;
    color: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    font-family: 'Road Rage', cursive;
    font-size: 2.5rem;

    &>h3 {
        padding:20px 0;
        font-family: sans-serif;
    }
`

export const MediaContainer= styled.div`
    width: 100vw;
    display:flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width: 800px){
        flex-direction:column;
        align-items: center;
    }
`

export const FooterMedia= styled.ul`
    width: 40vw;
    list-style-type:none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-right: 2px solid var(--primary-color);

    @media(max-width: 800px){
        border-right: none;
        width: 90vw;
    }
`

export const IconFace= styled.a`
    color: var(--color-primary);
    font-size:40px;

    &:hover{
      transition: 0.75s;
      color: #4267B2;
    }
`

export const IconTwit= styled.a`
    color: var(--color-primary);
    font-size:40px;

    &:hover{
      transition: 0.75s;
      color: #1DA1F2;
    }
`

export const IconInsta= styled.a`
    color: var(--color-primary);
    font-size:40px;

    &:hover{
      transition: 0.75s;
      color: #833AB4;
    }
`

export const IconWhats= styled.a`
    color: var(--color-primary);
    font-size:40px;

    &:hover{
      transition: 0.75s;
      color: #25D366;
    }
`
export const FooterEndereco= styled.div`
    width: 40vw;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
    
    &>h3,span{
        font-family: sans-serif;
    }

    @media(max-width: 800px){
        width: 90vw;
        min-height:10vh;

        &>span{
            font-size: 1.5rem;
        }
    }
`