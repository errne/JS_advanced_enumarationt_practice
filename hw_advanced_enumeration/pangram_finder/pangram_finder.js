const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.makeCharArray = function () {
  const frazeArray = this.phrase.toLowerCase().split('');
  return frazeArray;
};

PangramFinder.prototype.isPangram = function () {
  const array = this.makeCharArray();
  const uniqueItems = Array.from(new Set(array));
  if (uniqueItems.length < 27){
    return false;
  } else {
    return true;
  }
}



module.exports = PangramFinder;
