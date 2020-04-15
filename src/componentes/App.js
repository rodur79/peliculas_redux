import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from '../paginas/HomePage';
import PeliculaDetalle from '../paginas/PeliculaDetalle';
import Footer from './Footer';
import {connect} from 'react-redux';
import {updateFecha} from '../redux/actions/testActions';

class App extends Component{
  componentDidMount(){
    setInterval(this.props.updateFecha,1000);
  }

  render (){
    return(
      <BrowserRouter>
        <div>
          <Route exact path="/"         component={HomePage} />
          <Route path="/detalles/:peliculaid" component={PeliculaDetalle} />
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({test}){return {test}}
export default connect (mapStateToProps,{
  updateFecha //updateFecha:updateFecha
})(App);