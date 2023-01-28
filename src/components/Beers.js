import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Beers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            setBeers(res.data);
        })();
    }, [])

  return (
    <div>
        { beers ? <div>
            {beers.map(beer => {
                return (
                    <div key={beer._id} style={{width: "150px"}}>
                    <img src={beer.image_url} alt="" style={{width: "30px"}}/>
                        <Link to={beer._id}>
                            <h1>{beer.name}</h1>
                        </Link>
                        <h2>{beer.tagline}</h2>
                        <p>{beer.description}</p>
                        <p><b>Created by:</b>{beer.contributed_by}</p>
                    </div>
                )
            })}
        </div> : <p>Loading...</p>
        }
    </div>
  )
}

export default Beers