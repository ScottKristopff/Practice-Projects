class Media {
  constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

get title() {
  return this._title;
}

get ratings () {
  return this._ratings;
}
  set checkedOut(bool) {
    this._isCheckedOut = bool;
  }

get toggleCheckOutStatus () {
this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
   const ratingsSum = this._ratings.reduce((accumulator, rating) => 
     accumulator + rating)
  return ratingsSum/this._ratings.length;

}

addRating(rate) {
  this._ratings.push(rate);
  }
}

const rating = new Media("Book");

/* console.log(rating.addRating(5));
console.log(rating.ratings)
console.log(rating.getAverageRating())
rating.toggleCheckOutStatus;
console.log(rating._isCheckedOut);
rating.toggleCheckOutStatus;
console.log(rating._isCheckedOut);  */

class Book extends Media {
  constructor(author,title,pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
get author() {
  return this._author;
}

get pages() {
  return this._pages;
}

}

class Movie extends Media {
  constructor(title,director,runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }

  get runTime() {
    return this.runTime;
  }
}


const historyofEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyofEverything.toggleCheckOutStatus;
console.log(historyofEverything._isCheckedOut);
historyofEverything.addRating(4);
historyofEverything.addRating(5);
historyofEverything.addRating(5);
console.log(historyofEverything._ratings);
console.log(historyofEverything.getAverageRating())


const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus;
console.log(speed._isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed._ratings);
console.log(speed.getAverageRating())