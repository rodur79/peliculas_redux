import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from "styled-components";
import configureStore from './redux/configureStore';

const GlobalStyle = createGlobalStyle`
url('https://fonts.googleapis.com/css?family=Amatic+SC|Montserrat|Rock+Salt|Cinzel&display=swap');
  body {
    margin:0;
  }
`;

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
