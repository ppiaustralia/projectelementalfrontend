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

import FullScholarship from './pages/opportunities/pages/FullScholarship';
import ExchangeProgram from './pages/opportunities/pages/ExchangeProgram';
import PartialScholarship from './pages/opportunities/pages/PartialScholarship';
import ScholarshipPages from './pages/opportunities/pages/ScholarshipPages';
// import Scholarship from './pages/opportunities/Scholarship';

ReactDOM.render(
  <>
    <GlobalStyles />
    {/* <FullScholarship /> */}
    {/* <PartialScholarship /> */}
    <ExchangeProgram />
    {/* <ScholarshipPages /> */}
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
