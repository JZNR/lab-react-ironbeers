import React, {useState, useEffect} from 'react'
import axios from 'axios';

function RandomBeer() {

    const [beer, setBeer] = useState("");

    useEffect(() => {
        (async () => {
            const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
            setBeer(res.data);
        })();
    }, [])

  return (
    <div>
        <div key={beer._id} style={{width: "150px"}}>
            <img src={beer.image_url} alt="" style={{width: "30px"}}/>
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p><b>Created by:</b>{beer.contributed_by}</p>
        </div>      
    </div>
  )
}

export default RandomBeer