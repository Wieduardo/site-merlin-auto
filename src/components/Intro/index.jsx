import { IntroText, SectionIntro } from "./style";

const Intro = () =>{
    return(<>
        <SectionIntro>
            <IntroText>
                <h3>Seja Bem Vindo!</h3>
                <text>Aqui você tem a garantia de que seu veículo receberá o melhor tratamento. 
                    Trabalhamos com técnicos habilitados e experientes. Oferecemos CONFIABILIDADE.
                </text>
            </IntroText>
            <img src="https://img.freepik.com/fotos-gratis/criacao-de-bicicletas-na-oficina_23-2148866654.jpg?w=740&t=st=1682883078~exp=1682883678~hmac=03e1d2e21a822f3f80e81e2227d9e05e7b3f29549272aba1c6d83e6a92e7c663" alt="Ferramentas"/>
        </SectionIntro>
    </>)
}

export default Intro;