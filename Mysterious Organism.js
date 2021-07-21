// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}



// Factory Funtion Method
/* const mutation = {
mutate() {
    const random = Math.floor(Math.random() *  this.dna.length)
    const newBase = returnRandBase();
    if(this.dna[random] === newBase) {
      newBase = returnRandBase();
    }
    this.dna[random] = newBase;
    return this.dna;
    } */


const pAequorFactory = (id, dna) => {
  return {
    specimenNum : id,
    dna : dna,
    
    compareDNA(pAequor) {
      let differences = 0;
      for (let i = 0; i < this.dna.length; i++){
        if (this.dna[i]==pAequor.dna[i])
        differences++;
      }
      differences = (differences/this.dna.length*100).toFixed(2);
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${differences}% DNA in common`); 
    },
    
    willLikelySurvive(){
      let survivingChance = 0;
      for(let i = 1; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G' )
          survivingChance++;
      }
      survivingChance = survivingChance/this.dna.length*100;
      //console.log(survivingChance);
      if (survivingChance >= 60) {return true;}
      else {return false;}
    }
  }
};

//let sample = pAequorFactory(1,mockUpStrand());
//console.log (sample);

const mutate = (item) => {
  let newBase;
  do
    {newBase = returnRandBase();}
  while
    (item.dna[0]==newBase)
  item.dna[0]=newBase;
  return item.dna;
}


//let sample1 = pAequorFactory(1,mockUpStrand());
//let sample2 = pAequorFactory(2,mockUpStrand());
//sample1.compareDNA(sample2);
//sample.dna = mutate(sample);
//let surviving = sample1.willLikelySurvive();
   // while (!surviving){
      //sample1.dna = mockUpStrand();
      //surviving = sample1.willLikelySurvive();
    //}
//console.log(sample1.willLikelySurvive());
//console.log(sample1);

const create30Samples = () => {
  let sampleList = [];
  for (let i = 1; i <=30; i++) {
    //console.log('sampling');
    let sample = pAequorFactory(i, mockUpStrand());
    sampleList.push(sample);
    let surviving = sample.willLikelySurvive();
    while (!surviving){
      sample.dna = mockUpStrand();
      surviving = sample.willLikelySurvive();
    }
    console.log(`Sample ${sample.specimenNum}: ${sample.dna.join(',')} ${surviving}`);
  }
                
 return sampleList;
}

create30Samples();


