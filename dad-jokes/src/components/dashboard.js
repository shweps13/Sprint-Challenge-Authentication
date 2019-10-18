import React, { useEffect, useState } from 'react';
import axiosWithAuth from "../utilites/axiosWithAuth";


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
    </div>
  );
}

export default Dashboard;
