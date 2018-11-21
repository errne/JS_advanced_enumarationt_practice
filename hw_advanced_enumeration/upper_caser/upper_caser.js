const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  const uppercaseWords = this.words.map(word  => word.toUpperCase());
  return uppercaseWords;
}

module.exports = UpperCaser;
