const IsogramFinder = function (word) {
  this.word = word;
}

IsogramFinder.prototype.makeCharArray = function () {
  const wordArray = this.word.toLowerCase().split('');
  return wordArray;
};

IsogramFinder.prototype.isIsogram = function () {
  const wordArray = this.makeCharArray();
  const uniqueItems = Array.from(new Set(wordArray));
  if (uniqueItems.length < wordArray.length){
    return false;
  } else {
    return true;
  }
}

module.exports = IsogramFinder;
