import React from 'react';

import Header from '../componentes/Header';
import Destaque from '../componentes/Destaque';
import Cast from '../componentes/Cast';

import {connect} from 'react-redux';
import {getCreditos,getPeliculaDetalle} from '../redux/actions/moviesActions';

class PeliculaDetalle extends React.Component{
    componentDidMount(){
        //this.props.match.params.peliculaid para obtener los parametros
        const {peliculaid} = this.props.match.params;
        this.props.getPeliculaDetalle(peliculaid);
        this.props.getCreditos(peliculaid);
    }

    render(){
        return(
            <div>
                <Header fecha={this.props.test.fecha}/>
                <Destaque pelicula={this.props.pelicula_detalle.data} />
                <Cast cast={this.props.creditos.data} />
            </div>
        )
    }
}

function mapStateToProps({creditos,pelicula_detalle,test}){
    return {
        creditos,
        pelicula_detalle,
        test
    }
}

export default connect(mapStateToProps,{
    getCreditos,
    getPeliculaDetalle
})(PeliculaDetalle);
