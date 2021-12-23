import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { withRouter } from "react-router"
import Home from "../src/pages/home/Home"
import Navbar from "./layout/navbar/Navbar"

import Chapter from "../src/pages/chapter/Chapter"
import About from "../src/pages/about/About"
import Contact from "../src/pages/contact/Contact"
import Liveinoz, { ReadMore } from "../src/pages/liveinoz/Liveinoz"
import Blog from "../src/pages/blog/Blog"
// import { FooterContainer } from "./layout/footer/footer";
import Footer from "./layout/newFooter/Footer"

// create ci-cd he


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
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
