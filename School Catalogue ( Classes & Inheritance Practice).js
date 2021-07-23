class School {
  constructor(name,level,numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  get level () {
    return this._level;
  }

  set newNumberOfStudents(newProperty) {
    if( typeof newProperty === 'Number') {
      this._numberOfStudents = newProperty;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }

 quickFacts() {
   console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
 } 

 static pickSubstituteTeacher(substituteTeachers) {
  const random = Math.floor(substituteTeachers.length * Math.random());
  return substituteTeachers[random];
 }

};



class PrimarySchool extends School {
  constructor (name, numberOfStudents, pickupPolicy ) {
    super(name, numberOfStudents, 'primary');
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name,numberOfStudents, 'High')
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
     console.log (this._sportsTeams); 
  }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',  514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' );

lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);


const alSmith =  new HighSchool('Al E. Smith', 415 , ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams







