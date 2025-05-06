import React from "https://esm.sh/react@19";
import ReactDOM from "https://esm.sh/react-dom@19/client";
const { useState } = React;

function App() {
  const [jokeAnswer, setJokeAnswer] = useState("");

  // Functions to update the joke answer based on button clicks
  const tellJoke1 = () => {
    setJokeAnswer("Between you and me, something smells");
    console.log("Joke 1 Answer: Between you and me, something smells");
  };

  const tellJoke2 = () => {
    setJokeAnswer("A carrot");
    console.log("Joke 2 Answer: A carrot");
  };

  return (
    <div className="App">
      <h1>Jokes of the Day!</h1>
      <img
        alt="people laughing"
        src="https://media.newyorker.com/photos/655e365e5d4e798850508bfd/master/w_2560%2Cc_limit/Jokes_final.jpg"
      />
      <h2>Click the buttons and check the console to see the answers to these different jokes 👀</h2>
      <button onClick={tellJoke1}>What did the left eye say to the right eye?</button>
      <button onClick={tellJoke2}>What's orange and sounds like a parrot?</button>
      <p>{jokeAnswer}</p> {/* Display the joke answer */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
