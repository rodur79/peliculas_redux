import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div
`
    padding:5px;
    border:1px solid white;
`;

const InputSearch = styled.input
`
    background:none;
    border:none;
    height:22px;
    color:yellow;
    width:200px;
    margin-left:8px;
    &:focus{
        outline:none;
    };
    &::placeholder{
        color:#FFCA2B;
    }
`;

const BotonClear=styled.a
`
    color:white;
`;

export default({onChangeSearch,clear,search_text})=>(
    <Contenedor>
        <i className="fa fa-search"></i>
        <InputSearch 
            placeholder="Buscar" 
            onChange={onChangeSearch} 
            value={search_text}
        />
        <BotonClear 
            href="#" 
            onClick={clear}
        >
                <i className="fa fa-close"></i>
        </BotonClear>
    </Contenedor>
)