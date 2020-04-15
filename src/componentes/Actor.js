import React from 'react';
import styled from 'styled-components';

const urlBaseImage = 'https://image.tmdb.org/t/p/w154'; 

const Contenedor = styled.div
`
    border:2px solid gold;
    margin:2px;
`;

const Foto=styled.img
`
`;

const Nombre=styled.span
`
`;

export default({actor})=>(
    <Contenedor>
        <Foto src={actor.profile_path ? urlBaseImage+actor.profile_path:"https://dummyimage.com/185&text=no_image"} />
        <Nombre>{actor.name}</Nombre>
    </Contenedor>
)