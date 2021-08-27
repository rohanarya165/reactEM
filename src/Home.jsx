import React from 'react'
import Navbar from "./Navbar"

import Fab from '@material-ui/core/Fab';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';





export default function Home() {



  return (
    <>
      <div id="HomeMain">
        <div class="col-lg-7 col-md-12" id="home">
          <div class="hero-content">
            <center>
              <h1>You Think.We Deliver</h1>
              <p>We have team of Business Analysts, Designers, Developers and Quality Analysts well versed with different technologies, tools and best practices.</p>

              <Fab variant="extended" color="orange" aria-label="add" className="" href="https://www.engineermaster.in/request-free-quote" target="_blank" id="Fab">
                REQUEST A QUOTE </Fab>
              <Fab variant="extended" color="orange" aria-label="add" className="" href="https://www.youtube.com/watch?v=yWLGm9OQLaw" target="_blank" id="Fab">
                WATCH VIDEOS <PlayCircleOutlineIcon /> </Fab></center>
          </div></div>


        <img src="https://www.engineermaster.in/assets/img/hero-img.png" alt="home image" />
      </div>
      <div id="HC1" >
        <center>
          <div class="card border-light mb-3" id="homeCard">
            <center>
              <div class="card-header"><PhoneIphoneIcon /></div>
              <div class="card-body">
                <h5 class="card-title">Enterprise Mobility</h5>
                <p class="card-text">Enterprise Mobility Application Services & Solutions</p>
                <a href="">READ MORE</a>
              </div>
            </center>
          </div>
          <div class="card border-light mb-3" id="homeCard">
            <center>

              <div class="card-header"><FindInPageIcon /></div>
              <div class="card-body">
                <h5 class="card-title">Hire Dedicated Developer</h5>
                <p class="card-text">Hire Dedicated Developer or Development Team.</p>
                <a href="">READ MORE</a>
              </div>
            </center>
          </div>
          <div class="card border-light mb-3" id="homeCard">
            <center>
              <div class="card-header"><LiveHelpIcon /></div>
              <div class="card-body">
                <h5 class="card-title">Support & Maintenance</h5>
                <p class="card-text">Customer Support and Maintenance Services</p>
                <a href="">READ MORE</a>
              </div>
            </center>
          </div>
        </center>
      </div>








    </>

  )
}
