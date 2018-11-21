const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.makeWord = function (word) {
  const wordArray = word.toLowerCase().split('');
  wordArray.sort();
  const newWord = wordArray.reduce(( accumulator, currentValue ) => accumulator + currentValue,
  ""
);
  return newWord;
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const mainWord = this.makeWord(this.word);
  const result = otherWords.filter(word => this.makeWord(word) === mainWord);
  const result2 = result.filter(word => word !== this.word);
  return result2;
}

module.exports = AnagramFinder;
