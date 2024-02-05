import { useState } from "react";

let dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [text, setText] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = (search) => {
    let data = dictionary.find((item) => {
      return item.word.toLowerCase() === search.toLowerCase();
    });
    data
      ? setDefinition(data.meaning)
      : setDefinition("Word not found in the dictionary.");
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleSearch(text);
        }}
      >
        Search
      </button>
      <p>
        <strong>Definition:</strong>
      </p>
      {definition && <p>{definition}</p>}
    </div>
  );
}

export default App;
