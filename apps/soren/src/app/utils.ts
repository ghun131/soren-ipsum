export function generateSentencesGroup(inputText, numberOfSentence) {
  const textArr = inputText.split('.');
  const randomIndex = Math.floor(Math.random() * textArr.length);

  const subArr = textArr.slice(randomIndex, randomIndex + numberOfSentence);

  return subArr.map((item) => item.replace(/(\r\n|\n|\r)/gm, '')).join('.');
}

export function generateWordsGroup(inputText, numberOfWords) {
  const textArr = inputText.split(' ');
  const randomIndex = Math.floor(Math.random() * textArr.length);
  const subArr = textArr.slice(randomIndex, randomIndex + numberOfWords);

  return subArr.map((item) => item.replace(/(\r\n|\n|\r)/gm, '')).join(' ');
}

export function isMac() {
  return window.navigator.platform.includes('Mac');
}

export function isWin() {
  return window.navigator.platform.includes('Win');
}

export function isLinux() {
  return window.navigator.platform.includes('Linux');
}
