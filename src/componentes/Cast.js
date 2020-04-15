import React from 'react';
import styled from 'styled-components';
import TituloSeccion from './TituloSeccion';
import Actor from './Actor';

const Contenedor = styled.div
`
    display:flex;
    overflow:scroll;
`;

const Cargando=styled.div
`
    text-align:center;
    font-size:22px;
`;

export default({cast})=>{
    if (cast){
        return(
            <div>
                <TituloSeccion>Reparto:</TituloSeccion>
                <Contenedor>
                    {
                        cast.map(actor=>(
                            <Actor actor={actor}></Actor>
                        ))
                    }
                </Contenedor>
            </div>       
        )
    }else{
        return(
            <Cargando>Cargando...</Cargando>
        )
    }

}