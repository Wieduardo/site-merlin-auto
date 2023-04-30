import { createContext } from "react";
import { MdCarRepair } from 'react-icons/md'
import { ImCogs } from 'react-icons/im'
import { FaTruckLoading } from 'react-icons/fa'

export const GlobalContext = createContext([]);

export const GlobalProvider = ({children}) =>{

    //Catalogo de sites
    const catalogo = [
        {nome: "Reparos", descri: "Descrição vem aqui", icon: <MdCarRepair/>},
        {nome: "Manutenção", descri: "Descrição vem aqui", icon: <ImCogs/>},
        {nome: "Peças", descri: "Descrição vem aqui", icon: <FaTruckLoading/>}
    ];

    //Contato
    const userData = {
        telefone:"41 3333-3333",
        celular:"+5541987206060",
        twitter:"http://twitter.com.br",
        facebook:"http://facebook.com.br",
        insta:"http://instagram.com.br",
        cidade:"Cidade",
        bairro:"Bairro",
        rua:"Rua - nº xxxx"

    }

    const cellText= userData.celular.slice(0,3)+" "+userData.celular.slice(3,5)+" "+userData.celular.slice(5,10)+" "+userData.celular.slice(10,14);

    return (
        <GlobalContext.Provider
         value={{ catalogo, userData, cellText }}>
          {children}
        </GlobalContext.Provider>
       )

}