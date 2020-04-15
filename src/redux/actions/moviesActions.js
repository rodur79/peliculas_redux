import tipos from './tipos';
import axios from 'axios';

const urlBaseApi        = 'https://api.themoviedb.org/3/movie/';
const urlBaseApiSearch  = 'https://api.themoviedb.org/3/';
const apiKey            = 'd132c8b7351c4c050ee5023941590be8';
const apiLang           = 'es';

export const getEstrenos=()=>dispatch=>{
    dispatch({
        type:tipos.GET_ESTRENOS,
        payload:axios.get(`${urlBaseApi}now_playing?api_key=${apiKey}&language=${apiLang}`)
    })
}

export const getProximosEstrenos=()=>dispatch=>{
    dispatch({
        type:tipos.GET_PROXIMOS_ESTRENOS,
        payload:axios.get(`${urlBaseApi}upcoming?api_key=${apiKey}&language=${apiLang}`)
    })
}

export const getCreditos=(peliculaid)=>dispatch=>{
    dispatch({
        type:tipos.GET_CREDITOS,
        payload:axios.get(`${urlBaseApi}${peliculaid}/credits?api_key=${apiKey}&language=${apiLang}`)
    })
}

export const getPeliculaDetalle=(peliculaid)=>dispatch=>{
    dispatch({
        type:tipos.GET_PELICULA_DETALLE,
        payload:axios.get(`${urlBaseApi}${peliculaid}?api_key=${apiKey}&language=${apiLang}`)
    })
}

export const getBusqueda=(query_string)=>dispatch=>{
    dispatch({
        type:tipos.GET_BUSQUEDA,
        payload:axios.get(`${urlBaseApiSearch}search/movie/?api_key=${apiKey}&language=${apiLang}&query=${query_string}`)
    })
}

export const clearBusqueda=()=>{
    return{
        type:tipos.CLEAR_SEARCH
    }
}