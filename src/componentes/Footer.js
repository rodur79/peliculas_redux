import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logomdb.svg';

const Contenedor = styled.div
`
    background:rgba(38,50,56,1);
    padding:20px;
`;

export default()=>(
    <Contenedor>
        <img src={Logo} alt="Logo MDB" width="200" height="75"></img>
    </Contenedor>
)