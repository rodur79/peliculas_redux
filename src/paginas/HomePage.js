import React from 'react';

import Header from '../componentes/Header';
import Destaque from '../componentes/Destaque';
import Estrenos from '../componentes/Estrenos';
import TituloSeccion from '../componentes/TituloSeccion';
import SearchResults from '../componentes/SearchResults';

import {connect} from 'react-redux';
import {getEstrenos,getProximosEstrenos} from '../redux/actions/moviesActions';

class HomePage extends React.Component{
    componentDidMount(){
        this.props.getEstrenos();
        this.props.getProximosEstrenos();
    }

    renderResults=()=>{
        const {data} = this.props.busqueda;
        if(data.length===0){
            return(
                <div>
                    <Destaque pelicula={this.props.estrenos.peliDestacada}/>
                    <TituloSeccion>Estrenos</TituloSeccion>
                    <Estrenos peliculas = {this.props.estrenos.data} />
                    <TituloSeccion>Próximamente</TituloSeccion>
                    <Estrenos peliculas = {this.props.proximos_estrenos.data} />
                </div>
            );
        }else{
            return (<SearchResults peliculas={data}/>)
        }
    }

    render(){
        return(
            <div>
                <Header path={this.props.match.path} />
                {this.renderResults()}
            </div>
            
        )
    }
}

function mapStateToProps({estrenos,proximos_estrenos,busqueda}){
    return {
        estrenos,
        proximos_estrenos,
        busqueda
    }
}

export default connect(mapStateToProps,{
    getEstrenos,
    getProximosEstrenos
})(HomePage);