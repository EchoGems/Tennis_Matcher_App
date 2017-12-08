import React, {Component} from 'react';
// import Nav from 'pages/nav.js'
import PropTypes from 'prop-types';
import {Router, Route} from 'react-router';
import {Jumbotron, Button, Carousel, Item, Caption} from 'react-bootstrap'


export default class Home extends Component {

    render() {
        return (
            <div className={"admin"}>
              <Jumbotron>
                <h1>It starts with LOVE</h1>
                <p>You can use this app to find a local tennis player in San Diego and set up a date, time, and place to play!</p>
                <p><Button bsStyle="primary">Learn more</Button></p>
              </Jumbotron>
              <Carousel>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="/assets/Serena.jpg" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={400} height={400} alt="900x500" src="/assets/nadal.jpg" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="/assets/maria.jpeg" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
        )
    }
}
