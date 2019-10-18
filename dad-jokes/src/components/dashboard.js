import React, { useEffect, useState } from 'react';
import axiosWithAuth from "../utilites/axiosWithAuth";
import JokeCard from "./JokeCard";
import { Card } from 'semantic-ui-react';

function Dashboard() {

const [jokes, setJokes] = useState([]);

console.log(jokes)

useEffect(() => {
    axiosWithAuth()
    .get('/jokes')
    .then(res => {
        setJokes(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="DashBlock">
        <h2>Dad Jokes</h2>
        <Card.Group centered>
                {jokes.map(joke => (
                    <JokeCard 
                    id={joke.id} 
                    key={joke.id} 
                    joke={joke.joke}
                    />
                ))}
        </Card.Group>
    </div>
  );
}

export default Dashboard;
