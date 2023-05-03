import { LowContainer, LowContainerMid, UlSectionMain } from "./style";

const SectionMain = () =>{
    return(<>
        <UlSectionMain>
            <LowContainer>
                <h3>Atendimento</h3>
                <span>Seg. à Sext.</span>
            </LowContainer>
            <LowContainerMid>
                <h3>Horário</h3>
                <span>8:00h às 18:00h</span>
            </LowContainerMid>
            <LowContainer>
                <span>Orçamento Imediato</span>
            </LowContainer>
        </UlSectionMain>
    </>)
}

export default SectionMain;