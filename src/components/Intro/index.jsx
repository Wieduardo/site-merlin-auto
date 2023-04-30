import { IntroText, SectionIntro } from "./style";

const Intro = () =>{
    return(<>
        <SectionIntro>
            <IntroText>
                <h3>Bem Vindo</h3>
                <h4>Instalamos, Concertamos e Reparamos Autopeças!</h4>
                <text>Os serviços de instalação, manutenção e reparação de acessórios para veículos automotores 
                    é oferecido para qualquer usuário de um veículo desse tipo (inclusive veículos pesados). 
                    Desde que a atividade não esteja associada à venda ou fabricação, encontra-se classificada 
                    aqui. Como exemplos extremos, a colocação de películas de insufilm e a instalação de 
                    blindagem (demanda crescente no Brasil, infelizmente, devido ao aumento da violência e dos 
                    assaltos no trânsito).
                </text>
            </IntroText>
            <img src="https://img.freepik.com/fotos-gratis/criacao-de-bicicletas-na-oficina_23-2148866654.jpg?w=740&t=st=1682883078~exp=1682883678~hmac=03e1d2e21a822f3f80e81e2227d9e05e7b3f29549272aba1c6d83e6a92e7c663" alt="Ferramentas"/>
        </SectionIntro>
    </>)
}

export default Intro;