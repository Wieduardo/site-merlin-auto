import { LowContainer, LowContainerMid, UlSectionMain } from "./style";

const SectionMain = () =>{
    return(<>
        <UlSectionMain>
            <LowContainer>
                <h3>Atendimento</h3>
                <span>Segunda a Sexta</span>
            </LowContainer>
            <LowContainerMid>
                <h3>Horário</h3>
                <span>8:00 às 18:00</span>
            </LowContainerMid>
            <LowContainer>
                <h3>Orçamento Imediato</h3>
            </LowContainer>
        </UlSectionMain>
    </>)
}

export default SectionMain;