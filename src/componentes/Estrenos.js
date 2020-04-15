import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const urlBaseImage = 'https://image.tmdb.org/t/p/w154'; 

const Contenedor = styled.div
`
    >ul{
        background:rgba(66,165,245,1);
        padding-left:0;
        overflow:scroll;
        display:flex;
        margin:0;
        align-items:strech;
    }
`;

const ItemPelicula=styled(Link)
`
    list-style:none;
    display:inline-block;
    min-width:200px;
    margin:5px;
    height:300px;
    font-family: 'Amatic SC',cursive;
    color:yellow;
    background:url(${props=>urlBaseImage+props.pelicula.poster_path}) no-repeat;
    background-size:cover;
    font-size:20px;
    font-weight:bold;
    >span{
        background:rgba(38,50,56,0.5);
        display:none;
    }
    &:hover{
        >span{
            display:block;
        }
    }
`;

export default({peliculas})=>(
    <Contenedor>
        <ul>
            {
                peliculas.map(pelicula=>(
                    <ItemPelicula key={pelicula.id} pelicula={pelicula} to={`/detalles/${pelicula.id}`}>
                        <span>{pelicula.title}</span>
                    </ItemPelicula>
                ))
            }
        </ul>
    </Contenedor>
)