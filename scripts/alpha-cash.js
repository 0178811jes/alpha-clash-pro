// function play (){
//     //step:1 jodi btn click kori home screen hidden hobe
    
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')
//     // console.log(homeScreen);

//     //step:2 erpor playground dekhabe

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame() { 
    // step:1 - genarete random alphabet
    const alphabet = getRandomAlphabet();
    // console.log(alphabet);

    // random alphabet show
    const currentAlphabet = document.getElementById('current-alphbet');
    currentAlphabet.innerText = alphabet;

    // set background color
    setBackgroundById(alphabet)
}


function play (){
    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}