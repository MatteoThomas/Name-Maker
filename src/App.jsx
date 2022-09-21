import { useState } from 'react'

import './App.css'

// const list = []
const App = () => {
  const [list, setList] = useState([])
  const [word, setWord] = useState();
  const [randName, setRandName] = useState([])
  const [wordCount, setWordCount]= useState()

  const handleChange = e => {
    const str = e.target.value
    const arr = str.split(' ');
    setWord(arr);
  };

  const handleClick = ()  => {
    setList(list => [...word])
    console.log(list)
    document.getElementById('word').value = "";
  };
  
  function getOption() {
    const selectElement = document.querySelector('#wordCountSelect');
    setWordCount(selectElement.value)
    console.log(wordCount + " Word Count")  
  };

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num)
  };

  const handleRandomClick = e => {
    getOption()
    const randomNames = getMultipleRandom(list, wordCount)
    setRandName(randomNames)
  };
  console.log(randName.join(" "))


  const listItems = list.map((item, index) =>
    <div key={index}>
      {item}
    </div>
  );

  return (
    <div id="app">
      <header>Random Name Generator<br/>
      <span>
          <li>1. Add words to the input field with a space in-between them.</li>
          <li>2. Press the add words button.</li> 
          <li>3. Select the number of words in the generated name.</li>
          <li>4. Press the generate name button.</li>
        </span>
      </header>
      <div id="input-area">
        <input
          type="text"
          minLength="2"
          id="word"
          name="word"
          placeholder='add words here'
          onChange={handleChange}
          />
      <button id="add-word-button" onClick={handleClick}>Add Words</button>
      <p>Word Count{" "}
      <select id="wordCountSelect">
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={Math.random() * (4 - 1) + 2}>Random</option>
          </select>
          </p>
          </div>
      <ul id="word-list">{listItems}</ul>
      { listItems.length > 0 &&  <button id="random-button" onClick={handleRandomClick}>Generate Name</button> }
      { randName.length > 0 && <div id="generated-name">{randName.join(" ")}</div> }
  </div>
    )
  }

export default App
