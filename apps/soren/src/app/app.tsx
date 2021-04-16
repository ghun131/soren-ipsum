import React from 'react';
import SorenImg from '../assets/soren_kierkegaard.jpeg';
import text from '../assets/fat.txt';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './app.module.css';

export function App() {
  const [numberValue, setNumberValue] = React.useState(150);
  const [type, setType] = React.useState('words');
  const [excerpt, setExcerpt] = React.useState('');

  function handleChangeNumberValue(event) {
    setNumberValue(Number(event.target.value));
  }

  function handleChangeType(event) {
    setType(event.target.value);
  }

  function handleApplyNext() {
    if (type === 'words') {
      setExcerpt(`...${generateWordsGroup(text, numberValue)}...`);
    } else {
      setExcerpt(generateSentencesGroup(text, numberValue) + '.');
    }
  }

  function generateSentencesGroup(inputText, numberOfSentence) {
    const textArr = inputText.split('.');
    const randomIndex = Math.floor(Math.random() * textArr.length);
    
    const subArr = textArr.slice(
      randomIndex,
      randomIndex + numberOfSentence
    );

    console.log('subArr', randomIndex, numberOfSentence);
    

    return subArr.map((item) => item.replace(/(\r\n|\n|\r)/gm, '')).join('.');
  }

  function generateWordsGroup(inputText, numberOfWords) {
    const textArr = inputText.split(' ');
    const randomIndex = Math.floor(Math.random() * textArr.length);
    const subArr = textArr.slice(randomIndex, randomIndex + numberOfWords + 1);

    return subArr.map((item) => item.replace(/(\r\n|\n|\r)/gm, '')).join(' ');
  }

  return (
    <div className={styles.app}>
      <h1>Soren Ipsum</h1>
      <div>
        <img src={SorenImg} alt="soren portrait" />
      </div>

      <div>
        Knight of faith please gives me{' '}
        <Input value={numberValue} onChange={handleChangeNumberValue} />{' '}
        <Select value={type} onChange={handleChangeType}>
          <MenuItem value="words">words</MenuItem>
          <MenuItem value="sentences">sentences</MenuItem>
        </Select>
        of God
      </div>

      <section>{excerpt}</section>

      <section
        style={{ display: 'flex', justifyContent: 'space-around', width: 170 }}
      >
        <Button variant="outlined" color="default">
          Copy
        </Button>
        <Button onClick={handleApplyNext} variant="outlined" color="default">
          Next
        </Button>
      </section>
    </div>
  );
}

export default App;
