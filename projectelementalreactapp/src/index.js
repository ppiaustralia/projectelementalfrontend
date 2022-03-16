import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'; // normalize
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './global-styles';
import store from './store/store';
import { Provider } from 'react-redux';

// import Scholarship from '../src/pages/opportunities/scholarship/Scholarship';
// import FullScholarship from '../src/pages/opportunities/pages/FullScholarship';
// import PartialScholarship from '../src/pages/opportunities/pages/PartialScholarship';
// import Exchange from '../src/pages/opportunities/pages/Exchange';

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
