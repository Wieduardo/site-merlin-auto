import SectionMain from "../SectionMain";
import { Principal, StyledMain, StyledMainContent, Whatsapp } from "./style";

const Main = () =>{
    return(<>
        <StyledMain>
            <StyledMainContent>
                <Principal>
                    <h1>Merlin Autopeças</h1>
                    <Whatsapp target="_blank" rel='noreferrer' href="http://whatsapp.com">RESERVE UM HORÁRIO</Whatsapp>
                </Principal>
                <SectionMain/>
            </StyledMainContent>
        </StyledMain>
    </>)
}

export default Main;