// Declare sounds in arrays
const Initial = ['sh','th','y','b','j','c','r','sm','wh','pl','m','st'];
const Medial = ['a','e','i','o','u'];
const Final = ['ch','ng','ed','n','b','x','p','nk','ff','ll','t'];
let Sounds = [];
let badWords = [['sh,i,t'],['sh','a','t'],['st','a','b'],['wh','a','nk']]
let boxOne = document.getElementById('inside-box-1');
let boxTwo = document.getElementById('inside-box-2');
let boxThree = document.getElementById('inside-box-3');
let WordBox = document.getElementById('word-box');

//Function to randomly select sound from an array
const soundSelector = batch => {
    let sound = batch[Math.floor(Math.random()* batch.length)] ;
    return sound;
};



const wordGenerator = () => {
    let soundOne = soundSelector(Initial)
    let soundTwo = soundSelector(Medial)
    let soundThree=soundSelector(Final)
    Sounds.push(soundOne,soundTwo,soundThree)
    /*boxOne.innerHTML = soundOne;
    boxTwo.innerHTML = soundTwo;
    boxThree.innerHTML = soundThree;*/
    //console.log(`Your word to pronounce: ${soundOne}${soundTwo}${soundThree}, sounded as ${soundOne}-${soundTwo}-${soundThree}`)
};

const wordPrinter = () => {
    boxOne.innerHTML = Sounds[0];
    boxTwo.innerHTML = Sounds[1];
    boxThree.innerHTML = Sounds[2];
    WordBox.innerHTML = `Your word to pronounce: ${Sounds[0]}${Sounds[1]}${Sounds[2]}, sounded as ${Sounds[0]}-${Sounds[1]}-${Sounds[2]}`
    Sounds=[];
}


const StartButton = document.getElementById('start-button');

StartButton.addEventListener('click',wordGenerator);
StartButton.addEventListener('click',wordPrinter);




