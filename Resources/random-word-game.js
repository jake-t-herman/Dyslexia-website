// Declare sounds in arrays
const Initial = ['sh','th','y','b','j','c','r','sm','wh','pl','m','st'];
const Medial = ['a','e','i','o','u'];
const Final = ['ch','ng','ed','n','b','x','p','nk','ff','ll','t'];
let Sounds = [];
let badWords = [['sh','i','t'],['sh','a','t'],['st','a','b'],['wh','a','nk'],['sh','a','nk'],['sm','u','t'],['sh','a','t'],['j','a','p']]
let boxOne = document.getElementById('inside-box-1');
let boxTwo = document.getElementById('inside-box-2');
let boxThree = document.getElementById('inside-box-3');
let WordBox = document.getElementById('word-box');

//Function to randomly select sound from an array
const soundSelector = batch => {
    let sound = batch[Math.floor(Math.random()* batch.length)] ;
    return sound;
};

const wordGenerator = () => {       //generates random word from sounds arrays
    let soundOne = soundSelector(Initial)
    let soundTwo = soundSelector(Medial)
    let soundThree=soundSelector(Final)
    Sounds.push(soundOne,soundTwo,soundThree)
  };

  const wordCompare = lastword => {    // checks random word isn't on bad word list
    for (let i=0;i<badWords.length;i++) {
        if (lastword[0] === badWords[i][0] && lastword[1] === badWords[i][1] && lastword[2] === badWords[i][2]) {
            console.log(`bad word detected ${lastword}`)
            return true
        }
    }   return false;
}

const wordChecker = () => {  // prints only good words to console   
    do {
        Sounds=[]
        wordGenerator()
    } while (wordCompare(Sounds))
    
}

const wordPrinter = () => {     //prints random word to HTML
    boxOne.innerHTML = Sounds[0];
    boxTwo.innerHTML = Sounds[1];
    boxThree.innerHTML = Sounds[2];
    WordBox.innerHTML = `Your word to pronounce: ${Sounds[0]}${Sounds[1]}${Sounds[2]}, sounded as ${Sounds[0]}-${Sounds[1]}-${Sounds[2]}`
    Sounds=[];
}


const StartButton = document.getElementById('start-button');

StartButton.addEventListener('click',wordChecker);
StartButton.addEventListener('click',wordPrinter);




