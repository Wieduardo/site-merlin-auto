import styled from "styled-components";

export const StyledMain= styled.main`
    height: 100vh;
    background-image: url(https://img.freepik.com/fotos-gratis/trabalhador-de-servico-de-carro-muscular-reparando-o-veiculo_146671-19605.jpg?w=740&t=st=1682882975~exp=1682883575~hmac=2eec239fdaba2ca12f558626bb750d74d58ee29d654923d77c37b404f66ba01c);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    font-family: 'Road Rage', cursive;
    font-size: 3rem;
`

export const StyledMainContent= styled.section`
    background-color: rgba(0, 0, 0, 0.7);
    height:100vh;
    width:100vw;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
`

export const Principal= styled.div`
    border: 4px solid #fff;
    width: 60vw;
    height:300px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    text-align:center;
    gap:20px;

    @media(max-width: 360px){
        font-size: 1.3rem;
    }
`

export const Whatsapp= styled.a`
    text-decoration: none;
    color: var(--color-text);
    background-color: var(--color-primary);
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
`