import React from 'react';
import SorenImg from '../assets/soren_kierkegaard.jpeg';
import border19th from '../assets/19th_border.jpeg';
import text from '../assets/fat.txt';
import { useKeydown, useKeyup } from './useHotkeys';
import CopyButton from './CopyButton';
import NextButton from './NextButton';
import {
  generateSentencesGroup,
  generateWordsGroup,
  isMac,
  isLinux,
  isWin,
} from './utils';
import { useStyles } from './useStyles';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

export function App() {
  const classes = useStyles()();
  const [numberValue, setNumberValue] = React.useState(5);
  const [type, setType] = React.useState('sentences');
  const [excerpt, setExcerpt] = React.useState('');
  const [isCopied, setCopied] = React.useState(false);
  const [isHoldingCtr, setIsHoldingCtr] = React.useState(false);
  const [isFirstLetterBig, setFirstLetterBig] = React.useState(true);

  React.useEffect(() => {
    handleApplyNext();
  }, []);

  useKeydown((event) => {
    if (
      (event.metaKey && isMac()) ||
      (event.keyCode === 17 && (isWin() || isLinux()))
    ) {
      setIsHoldingCtr(true);
    }

    if (event.keyCode === 67 && isHoldingCtr) {
      event.preventDefault();
      handleCopyText();
    }

    if (event.keyCode === 71 && isHoldingCtr) {
      event.preventDefault();
      handleApplyNext();
    }
  });

  useKeyup((event) => {
    if (event.metaKey || event.keyCode === 17) {
      setIsHoldingCtr(false);
    }
  });

  function handleChangeNumberValue(event) {
    if (!isNaN(Number(event.target.value))) {
      setNumberValue(Number(event.target.value));
    }
  }

  function handleChangeType(event) {
    setType(event.target.value);
  }

  function handleApplyNext() {
    navigator.clipboard.writeText('');
    setCopied(false);
    if (type === 'words') {
      setExcerpt(`...${generateWordsGroup(text, numberValue)}...`);
      setFirstLetterBig(false);
    } else {
      setExcerpt(generateSentencesGroup(text, numberValue) + '.');
      setFirstLetterBig(true);
    }
  }

  function handleCopyText() {
    navigator.clipboard.writeText(excerpt);
    setCopied(true);
  }

  return (
    <div>
      <div className={classes.title}>Soren Ipsum</div>
      <div>
        <img
          className={classes.imgStyle}
          src={SorenImg}
          height={300}
          width={300}
          alt="soren portrait"
        />
      </div>

      <div className={classes.textContainer}>
        Knight of faith gives me{'   '}
        <Input
          className={classes.inputStyle}
          data-testid="letter-amount"
          value={numberValue}
          onChange={handleChangeNumberValue}
        />{' '}
        <Select
          className={classes.selectStyle}
          value={type}
          onChange={handleChangeType}
          data-testid="letter-type"
        >
          <MenuItem value="words">words</MenuItem>
          <MenuItem value="sentences">sentences</MenuItem>
        </Select>
        of God
      </div>

      <p
        className={
          isFirstLetterBig ? classes.excerptSentences : classes.excerptWords
        }
        data-testid="excerpt"
      >
        {excerpt}
      </p>

      {excerpt && (
        <section className={classes.buttonGroupsContainer}>
          <div className={classes.buttonContainer}>
            <CopyButton handleCopyText={handleCopyText} isCopied={isCopied} />
          </div>
          &nbsp; &nbsp;
          <div className={classes.buttonContainer}>
            <NextButton handleApplyNext={handleApplyNext} />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
