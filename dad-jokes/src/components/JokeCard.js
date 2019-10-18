import React from 'react';
import { Card } from 'semantic-ui-react'

function App(props) {
  return (
    <Card key={props.id} id={props.id}>
        <Card.Content header='Funny Joke!' />
        <Card.Content>{props.joke}</Card.Content>
    </Card>
  );
}

export default App;
