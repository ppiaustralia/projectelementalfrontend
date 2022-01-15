import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from '../src/pages/home/Home';
import Navbar from './layout/navbar/Navbar';

import Chapter from '../src/pages/chapter/Chapter';
import About from '../src/pages/about/About';
import Contact from '../src/pages/contact/Contact';
import Liveinoz, { ReadMore } from '../src/pages/liveinoz/Liveinoz';
import Blog from '../src/pages/blog/Blog';
// import Opportunities from '../src/pages/opportunities/Opportunities';
import Scholarship from '../src/pages/opportunities/Scholarship';
// import DifferentScholarships from '../src/pages/opportunities/DifferentScholarships';
// import Career from '../src/pages/career/Career';
// import { FooterContainer } from "./layout/footer/footer";
import PageUnavailable from '../src/pages/404/PageUnavailable.jsx';
import Footer from './layout/newFooter/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route
          path="/chapter/:statename"
          exact
          component={withRouter(Chapter)}
        />
        <Route path="/liveinoz" exact component={Liveinoz} />
        <Route path="/liveinoz/:id" exact component={ReadMore} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact" exact component={Contact} />
        <Route
          path="/opportunities/scholarship"
          exact
          component={Scholarship}
        />
        {/* <Route
          path="/opportunities/scholarship/:type"
          exact
          component={withRouter{DifferentScholarships}}
        /> */}

        {/* In react-router-v4 you don't nest <Routes />. Instead, you put them inside another <Component />.
          <Route path="/opportunities/scholarship"exact component={Scholarship}  />
          <Route path="/opportunities/career" exact component ={Career} />
        */}
        <Route component={PageUnavailable} />
        {/* <Route path="*" component={PageUnavailable} /> */}
        {/* <Route path="/404" component={PageUnavailable} /> */}
        {/* <Redirect to="/404" /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
