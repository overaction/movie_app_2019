import React from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>
}
/*
function Food(props) {
  return <h1>I like {props.fav}</h1>
}
*/

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="potato"></Food>
    </div>
  );
}

export default App;
