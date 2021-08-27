import ReachUs from './ReachUs';
import Home from './Home';
import React from 'react';
import Blog from './Blog';
import Footer from './Footer'
import { Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/blog" component={Blog}/>
    <Route exact path="/reach" component={ReachUs}/>
    <Redirect to="/" />

    </Switch> 
    <Footer/>
    
    </>
  );
}

export default App;
