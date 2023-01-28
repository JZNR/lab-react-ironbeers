import React from 'react'
import beer from "../assets/beers.png";
import newBeerImage from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <img src={beer} alt="" />
        <Link to="/beers">
            <h2>All beers</h2>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam maxime illo 
        officiis ea cum facere vel delectus ipsum labore aut assumenda molestias,
         dolore debitis est facilis ratione beatae optio?</p>

        <img src={randomBeer} alt="" />

        <Link to="/random-beer">
            <h2>Random beer</h2>
        </Link>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Obcaecati in dolores quae asperiores ducimus ipsam consequatur sequi eum sint recusandae consequuntur
         ut laborum dicta quo, nobis harum voluptatem distinctio dolorem.</p>
        <img src={newBeerImage} alt="" />

        <Link to="/beers/new">
            <h2>New beer</h2>
        </Link>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quas, consequatur alias minima hic tempore consectetur at nulla nemo quae, 
        eos possimus minus? Molestiae, cumque et minus
        perspiciatis ipsum culpa atque.</p>
    </div>
  )
}

export default Home;