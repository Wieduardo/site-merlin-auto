import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import { SectionServicos, ServicoCard, ServicoCardContent, ServicosContainer } from "./style";

const Servicos = () => {

    const { catalogo } =useContext(GlobalContext);

    return(<>
        <SectionServicos>
            <h2>Serviços</h2>
            <ServicosContainer>
            {catalogo.map((servico, index) => (
                <ServicoCard key={index}>
                    <span>{servico.icon}</span>
                    <ServicoCardContent>
                        <h2>{servico.nome}</h2>
                        <span>{servico.descri}</span>
                    </ServicoCardContent>
                </ServicoCard>))
            }
            </ServicosContainer>
        </SectionServicos>
    </>)
}
export default Servicos;