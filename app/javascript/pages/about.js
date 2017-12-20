import React, {Component} from 'react';

export default class About extends Component {

    render() {
        return (
          <div>
            <div class="container">
              <h1 class="my-4">About Us
              </h1>

              <div class="row">
                <div class="col-lg-12">
                  <h2 class="my-4">Our Team</h2>
                </div>
                <div class="col-lg-4 col-sm-6 text-center mb-4">
                  <img class="rounded-circle img-fluid d-block mx-auto" src="/assets/austinCat.jpg" alt=""/>
                  <h3>Austin Gilinsky</h3>
                  <p><i>Full-Stack Web Developer</i> <br/> In his free time he enjoys spending time with his two kittens Khalessi and Khal Drogo as well as kickboxing and basketball.</p>
                </div>
                <div class="col-lg-4 col-sm-6 text-center mb-4">
                  <img class="rounded-circle img-fluid d-block mx-auto" src="/assets/crisCat.jpg" alt=""/>
                  <h3>Cris Pope</h3>
                  <p><i>Full-Stack Web Developer</i> <br/> Loves playing tennis and spending time with her cat Julieta.</p>
                </div>
                <div class="col-lg-4 col-sm-6 text-center mb-4">
                  <img class="rounded-circle img-fluid d-block mx-auto" src="/assets/frankDog.jpg" alt=""/>
                  <h3>Frank Strocco</h3>
                  <p><i>Full-Stack Web Developer</i> <br/>San Diego born and raised. Into surfing, soccer, and dogs!</p>
                </div>
                <div class="col-lg-4 col-sm-6 text-center mb-4">
                  <img class="rounded-circle img-fluid d-block mx-auto" src="/assets/coleFish.jpg" alt=""/>
                  <h3>Cole Halsell</h3>
                  <p><i>Full-Stack Web Developer</i> <br/> Oklahoma native now living in San Diego. </p>
                </div>
                <div class="col-lg-4 col-sm-6 text-center mb-4">
                  <img class="rounded-circle img-fluid d-block mx-auto" src="/assets/kariannPanda.jpg" alt=""/>
                  <h3>Kari Ann Yoshida</h3>
                  <p><i>Full-Stack Web Developer</i> <br/>In her free time you might be able to find Kari Ann at a local coffee shop in San Diego</p>
                </div>
                <div class="col-lg-4 col-sm-6 text-center mb-4">
                  <img class="rounded-circle img-fluid d-block mx-auto" src="/assets/andrewDog.jpg" alt=""/>
                  <h3>Andrew Levy</h3>
                  <p><i>Full-Stack Web Developer</i><br />Andrew has been known to procrastinate when it comes to writing descriptions of himself.</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
