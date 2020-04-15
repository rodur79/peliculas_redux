import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const urlBaseImage = 'https://image.tmdb.org/t/p/w185'; 

const Contenedor = styled.div
`
    display:flex;
    background:black;
    flex-wrap:wrap;
`;

const ItemBusqueda=styled(Link)
`
    background:url(${props=>urlBaseImage+props.pelicula.poster_path}) no-repeat;
    background-size:cover;
    height:300px;
    width:200px;
    font-family: 'Amatic SC',cursive;
    color:yellow;
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
        {
            peliculas.map(pelicula=>(
                <ItemBusqueda 
                    key={pelicula.id} 
                    pelicula={pelicula} 
                    to={`/detalles/${pelicula.id}`}>
                    <span>{pelicula.title}</span>
                </ItemBusqueda>
            ))
        }
    </Contenedor>
)