import React from 'react';
import SorenImg from '../assets/soren_kierkegaard.jpeg';
import border19th from '../assets/19th_border.jpeg';
import text from '../assets/fat.txt';
import { useKeydown, useKeyup } from './useHotkeys';
import {
  generateSentencesGroup,
  generateWordsGroup,
  isMac,
  isLinux,
  isWin,
} from './utils';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    fontSize: 45,
    marginTop: 25,
  },
  buttonGroupsContainer: {
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  imgStyle: {
    borderRadius: '50%',
    display: 'block',
    margin: '0 auto',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    fontSize: 20,
  },
  excerptWords: {
    fontSize: 20,
    width: '80%',
    margin: '30px auto',
  },
  excerptSentences: {
    fontSize: 20,
    width: '80%',
    margin: '30px auto',

    '&:first-letter': {
      fontSize: '250%',
    },
  },
  buttonContainer: {
    backgroundImage: `url(${border19th})`,
    width: 114,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 68,
  },
  inputStyle: {
    fontSize: 20,
    width: 30,
    margin: '0 7px',
  },
  selectStyle: {
    fontSize: 20,
  },
  button: {
    backgroundColor: 'white',
  },
});

export function App() {
  const classes = useStyles();
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
      (event.keyCode === 91 && (isWin() || isLinux()))
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
    if (isHoldingCtr) {
      setIsHoldingCtr(false);
    }
  });

  function handleChangeNumberValue(event) {
    setNumberValue(Number(event.target.value));
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
        Knight of faith please gives me{'   '}
        <Input
          className={classes.inputStyle}
          value={numberValue}
          onChange={handleChangeNumberValue}
        />{' '}
        <Select
          className={classes.selectStyle}
          value={type}
          onChange={handleChangeType}
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
      >
        {excerpt}
      </p>

      {excerpt && (
        <section className={classes.buttonGroupsContainer}>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              onClick={handleCopyText}
              color="default"
            >
              {isCopied ? 'Copied' : 'Copy'}
            </Button>
          </div>
          &nbsp; &nbsp;
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              onClick={handleApplyNext}
              color="default"
            >
              Next
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
