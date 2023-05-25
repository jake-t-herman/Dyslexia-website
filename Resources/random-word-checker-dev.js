// Declare sounds in arrays
const Initial = ['sh','sh','th','y','b','j','c','r','sm','wh','pl','m','st'];
const Medial = ['a','e','i','o','u'];
const Final = ['ch','ng','ed','n','b','x','p','nk','ff','ll','t'];
let Sounds = [];
let badWords = [['sh','i','t'],['sh','a','t'],['st','a','b'],['wh','a','nk'],['sh','a','nk'],['sm','u','t'],['sh','a','t'],['j','a','p']]

//Function to randomly select sound from an array
const soundSelector = batch => {
    let sound = batch[Math.floor(Math.random()* batch.length)] ;
    return sound;
};

const wordGenerator = () => {   //generates random word
    let soundOne = soundSelector(Initial)
    let soundTwo = soundSelector(Medial)
    let soundThree=soundSelector(Final)
    Sounds.push(soundOne,soundTwo,soundThree)
};

const wordCompare = lastword => {    // checks random word isn't on bad word list
    for (let i=0;i<badWords.length;i++) {
        if (lastword[0] === badWords[i][0] && lastword[1] === badWords[i][1] && lastword[2] === badWords[i][2]) {
            console.log('bad word detected')
            return true
        }
    }   return false;
}

const wordChecker = () => {  // prints only good words to console   
    do {
        Sounds=[]
        wordGenerator()
        //console.log(Sounds)
    } while (wordCompare(Sounds))
    
}