import { createContext } from "react";
import { MdCarRepair } from 'react-icons/md'
import { ImCogs } from 'react-icons/im'
import { FaTruckLoading } from 'react-icons/fa'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'

export const GlobalContext = createContext([]);

export const GlobalProvider = ({children}) =>{

    //Catalogo de sites
    const catalogo = [
        {nome: "Corretivos", descri: "Serviços completos em mecânica corretiva, seja motor, injeção, suspensão e freios.", icon: <MdCarRepair/>},
        {nome: "Preventivo", descri: "Para sua tranquilidade, oferecemos serviços profissionais em troca de óleo, filtros, alinhamentos, balanceamento, correias e tudo o mais que possa lhe assegurar boa direção.", icon: <ImCogs/>},
        {nome: "Diagnósticos", descri: "Oferecemos uma revisão completa com diagnostico e orçamento sem compromisso, para lhe assegurar planejamento e tranquilidade, além de vida útil para seu veículo.", icon: <FaTruckLoading/>},
        {nome: "Missão", descri: "Assegurar aos nossos clientes, sempre um serviço de excelência baseado numa politica de melhoria contínua.", icon: <HiOutlineWrenchScrewdriver/>}
    ];

    //Contato
    const userData = {
        telefone:"41 3333-3333",
        celular:"+5541987206060",
        twitter:"http://twitter.com.br",
        facebook:"http://facebook.com.br",
        insta:"http://instagram.com.br",
        cidade:"Curitiba/PR",
        bairro:"Boqueirão",
        rua:"Rua Gabriel Corisco Domingues, n.221"

    }

    const cellText= userData.celular.slice(0,3)+" "+userData.celular.slice(3,5)+" "+userData.celular.slice(5,10)+" "+userData.celular.slice(10,14);

    return (
        <GlobalContext.Provider
         value={{ catalogo, userData, cellText }}>
          {children}
        </GlobalContext.Provider>
       )

}