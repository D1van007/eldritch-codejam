import ancientsData from "./data/ancients.js";
import cardsDataBlue from "./data/MythicCardsData/blue/index.js";
import cardsDataBrown from "./data/MythicCardsData/brown/index.js";
import cardsDataGreen from "./data/MythicCardsData/green/index.js";

const ancientCard = document.querySelector('.ancients-container')
const azathoth = document.getElementById('azathoth')
const cthulthu = document.getElementById('cthulthu')
const iogSothoth = document.getElementById('iogSothoth')
const shubNiggurath = document.getElementById('shubNiggurath')

const ancientCards = document.querySelectorAll('.ancient-card')
let isContainAncient = false;

const difficultyLevel = document.querySelector('.difficulty-container');
const difficulty =document.querySelectorAll('.difficulty')

const deck = document.querySelector('.deck')
const lastCard = document.querySelector('.last-card')
const stageTextOne = document.querySelector('.one')
const stageTextTwo= document.querySelector('.two')
const stageTextThree = document.querySelector('.three')

let isContainDifficulty = false;

const shuffle = document.querySelector('.shuffle-button')
const deckСontainer = document.querySelector('.deck-container')

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

let stageOneDeckStack = []
let stageTwoDeckStack = []
let stageThreeDeckStack = []

let arrBrown = []
let arrBlue = []
let arrGreen = []

let arrBrownForEasy = []
let arrGreenForEasy = []
let arrBlueForEasy = []

let arrBrownForHard = []
let arrGreenForHard = []
let arrBlueForHard = []

let arrBrownHard = []
let arrGreenHard = []
let arrBlueHard = []

let arrBrownNormal = []
let arrGreenNormal = []
let arrBlueNormal = []

let arrBrownEasy = []
let arrGreenEasy = []
let arrBlueEasy = []

let arrBrownSuperEasyStart = []
let arrGreenSuperEasyStart = []
let arrBlueSuperEasyStart = []

let arrBrownSuperEasy = []
let arrGreenSuperEasy = []
let arrBlueSuperEasy = []

let arrBrownSuperHardStart = []
let arrGreenSuperHardStart = []
let arrBlueSuperHardStart = []

let arrBrownSuperHard = []
let arrGreenSuperHard = []
let arrBlueSuperHard = []


function retry (){
    stageOneDeckStack.length = 0;
    stageTwoDeckStack.length = 0;
    stageThreeDeckStack.length = 0;
    deck.classList.remove('deactive');
    lastCard.style.backgroundImage = `none`;
    stageTextOne.classList.remove('done')
    stageTextTwo.classList.remove('done')
    stageTextThree.classList.remove('done')

    arrBrown = cardsDataBrown.map(function(c){return c.id}) //Для средней сложности
    arrGreen = cardsDataGreen.map(function(c){return c.id})
    arrBlue = cardsDataBlue.map(function(c){return c.id})

    arrBrownForEasy = cardsDataBrown.filter(c =>c.difficulty !== 'hard').map(function(c){return c.id}) //Для легкой сложности
    arrGreenForEasy = cardsDataGreen.filter(c =>c.difficulty !== 'hard').map(function(c){return c.id})
    arrBlueForEasy = cardsDataBlue.filter(c =>c.difficulty !== 'hard').map(function(c){return c.id})

    arrBrownForHard = cardsDataBrown.filter(c =>c.difficulty !== 'easy').map(function(c){return c.id}) //Для высокой сложности
    arrGreenForHard = cardsDataGreen.filter(c =>c.difficulty !== 'easy').map(function(c){return c.id})
    arrBlueForHard = cardsDataBlue.filter(c =>c.difficulty !== 'easy').map(function(c){return c.id})

    arrBrownNormal = cardsDataBrown.filter(c =>c.difficulty == 'normal').map(function(c){return c.id}) //Для очень высокой и очень легкой сложности - ниже из них общий массив
    arrGreenNormal = cardsDataGreen.filter(c =>c.difficulty == 'normal').map(function(c){return c.id})
    arrBlueNormal = cardsDataBlue.filter(c =>c.difficulty == 'normal').map(function(c){return c.id})

    arrBrownHard = cardsDataBrown.filter(c =>c.difficulty == 'hard').map(function(c){return c.id}) //Для очень высокой сложности
    arrGreenHard = cardsDataGreen.filter(c =>c.difficulty == 'hard').map(function(c){return c.id})
    arrBlueHard = cardsDataBlue.filter(c =>c.difficulty == 'hard').map(function(c){return c.id})

    arrBrownEasy = cardsDataBrown.filter(c =>c.difficulty == 'easy').map(function(c){return c.id})//Для  очень легкой йсложности
    arrGreenEasy = cardsDataGreen.filter(c =>c.difficulty == 'easy').map(function(c){return c.id})
    arrBlueEasy = cardsDataBlue.filter(c =>c.difficulty == 'easy').map(function(c){return c.id})

    arrBrownSuperEasyStart = [...arrBrownEasy, ...arrBrownNormal] //Для  очень легкой йсложности
    arrGreenSuperEasyStart = [...arrGreenEasy, ...arrGreenNormal]
    arrBlueSuperEasyStart = [...arrBlueEasy, ...arrBlueNormal]

    arrBrownSuperHardStart = [...arrBrownHard, ...arrBrownNormal] //Для очень высокой сложности
    arrGreenSuperHardStart = [...arrGreenHard, ...arrGreenNormal]
    arrBlueSuperHardStart = [...arrBlueHard, ...arrBlueNormal]
  
}
        ancientCard.addEventListener('click', function(event){
            let active = ancientCard.querySelector('.active');
            if(active) {
                active.classList.remove('active');
            }
              event.target.classList.add('active');
              ancientCards.forEach(function(e) {
                if(e.classList.contains('active')) {
                    isContainAncient = true;
                }
              });
              if (isContainAncient) {
                document.querySelector('.difficulty-container').classList.add('active');
                deckСontainer.classList.remove('active')
                retry ()
            } if (isContainAncient && isContainDifficulty) {
                shuffle.classList.add('active');
            }
            
        });

        difficulty.forEach(
        function (dif) {
        dif.addEventListener('click', function(event){
            let active = difficultyLevel.querySelector('.active');

            if(active) {
                active.classList.remove('active');
            }
              event.target.classList.add('active');
              difficulty.forEach(function(e) {
                if(e.classList.contains('active')) {
                    isContainDifficulty = true;
                }

              });
              if (isContainDifficulty) {
                shuffle.classList.add('active');
                deckСontainer.classList.remove('active')
                retry ()
            }
        });})

        shuffle.addEventListener('click', () => {
            shuffle.classList.remove('active')
            deckСontainer.classList.add('active')
            mainShuffle();
            console.log(stageOneDeckStack)
            console.log(stageTwoDeckStack)
            console.log(stageThreeDeckStack)
            
         } );

//общие основные функции
            function shuffleArr(array) {
                for (let i = array.length - 1; i > 0; i--) {
                  let j = Math.floor(Math.random() * (i + 1));
                  [array[i], array[j]] = [array[j], array[i]];
                 
                }}
//Средний уровень сложности
function createArrStageNormal (arrayStage, arrColor, arrColorForEasy, arrColorForHard, arrColorHard, arrColorNormal, arrColorEasy, arrColorSuperEasy, arrColorSuperHard, q) {
    for (let i = 1; i <= q; i++){
        shuffleArr(arrColor)
        arrayStage.push(arrColor.pop())
}}

//Легкий уровень сложности
function creatArrColorEasy (arrayStage, arrColor, arrColorForEasy, arrColorForHard, arrColorHard, arrColorNormal, arrColorEasy, arrColorSuperEasy, arrColorSuperHard,q) {
    for (let i = 1; i <= q; i++){
        shuffleArr(arrColorForEasy)
        arrayStage.push(arrColorForEasy.pop())
}}
//Высокий уровень сложности
function creatArrColorHard (arrayStage, arrColor, arrColorForEasy, arrColorForHard, arrColorHard, arrColorNormal, arrColorEasy, arrColorSuperEasy, arrColorSuperHard,q) {
    for (let i = 1; i <= q; i++){
        shuffleArr(arrColorForHard)
        arrayStage.push(arrColorForHard.pop())
}}

//Супер сложный уровень сложности
function creatArrColorSuperHard (arrayStage, arrColor, arrColorForEasy, arrColorForHard, arrColorHard, arrColorNormal, arrColorEasy, arrColorSuperEasy, arrColorSuperHard,q) {
    for (let i = 1; i <= q; i++){
        shuffleArr(arrColorSuperHard)
        arrayStage.push(arrColorSuperHard.pop())
}}

//Супер легкий уровень сложности
function creatArrColorSuperEasy (arrayStage, arrColor, arrColorForEasy, arrColorForHard, arrColorHard, arrColorNormal, arrColorEasy, arrColorSuperEasy, arrColorSuperHard, q) {
    for (let i = 1; i <= q; i++){
        shuffleArr(arrColorSuperEasy)
        arrayStage.push(arrColorSuperEasy.pop())

}}

function Coaatt (i) {
    first.querySelector('.green').textContent = ancientsData[i].firstStage.greenCards;
    first.querySelector('.brown').textContent = ancientsData[i].firstStage.brownCards;
    first.querySelector('.blue').textContent = ancientsData[i].firstStage.blueCards;
    second.querySelector('.green').textContent = ancientsData[i].secondStage.greenCards;
    second.querySelector('.brown').textContent = ancientsData[i].secondStage.brownCards;
    second.querySelector('.blue').textContent = ancientsData[i].secondStage.blueCards;
    third.querySelector('.green').textContent = ancientsData[i].thirdStage.greenCards;
    third.querySelector('.brown').textContent = ancientsData[i].thirdStage.brownCards;
    third.querySelector('.blue').textContent = ancientsData[i].thirdStage.blueCards;
}

function createArrColor (createArr){
    let CoatFirstGreen = first.querySelector('.green').textContent
    let CoatFirstBrown = first.querySelector('.brown').textContent
    let CoatFirstBlue = first.querySelector('.blue').textContent 
    let CoatSecondGreen = second.querySelector('.green').textContent
    let CoatSecondBrown = second.querySelector('.brown').textContent
    let CoatSecondBlue = second.querySelector('.blue').textContent
    let CoatThirdGreen = third.querySelector('.green').textContent
    let CoatThirdBrown = third.querySelector('.brown').textContent
    let CoatThirdBlue = third.querySelector('.blue').textContent

             createArr (stageThreeDeckStack, arrпшее Brown, arrBrownForEasy, arrBrownForHard, arrBrownHard, arrBrownNormal, arrBrownEasy, arrBrownSuperEasy, arrBrownSuperHard, CoatThirdBrown)  //stage3   
             createArr (stageThreeDeckStack, arrGreen, arrGreenForEasy, arrGreenForHard, arrGreenHard, arrGreenNormal, arrGreenEasy, arrGreenSuperEasy, arrGreenSuperHard, CoatThirdGreen)  //stage3   
             createArr (stageThreeDeckStack, arrBlue, arrBlueForEasy, arrBlueForHard, arrBlueHard, arrBlueNormal, arrBlueEasy, arrBlueSuperEasy, arrBlueSuperHard, CoatThirdBlue)   //stage3   

             createArr (stageTwoDeckStack, arrBrown, arrBrownForEasy, arrBrownForHard, arrBrownHard, arrBrownNormal, arrBrownEasy, arrBrownSuperEasy, arrBrownSuperHard, CoatSecondBrown)   //stage2  
             createArr (stageTwoDeckStack, arrGreen, arrGreenForEasy, arrGreenForHard, arrGreenHard, arrGreenNormal, arrGreenEasy, arrGreenSuperEasy, arrGreenSuperHard, CoatSecondGreen)   //stage2  
             createArr (stageTwoDeckStack, arrBlue, arrBlueForEasy, arrBlueForHard, arrBlueHard, arrBlueNormal, arrBlueEasy, arrBlueSuperEasy, arrBlueSuperHard, CoatSecondBlue)   //stage2  

             createArr (stageOneDeckStack, arrBrown, arrBrownForEasy, arrBrownForHard, arrBrownHard, arrBrownNormal, arrBrownEasy, arrBrownSuperEasy, arrBrownSuperHard, CoatFirstBrown)   //stage1
             createArr (stageOneDeckStack, arrGreen, arrGreenForEasy, arrGreenForHard, arrGreenHard, arrGreenNormal, arrGreenEasy, arrGreenSuperEasy, arrGreenSuperHard, CoatFirstGreen)   //stage1
             createArr (stageOneDeckStack, arrBlue, arrBlueForEasy, arrBlueForHard, arrBlueHard, arrBlueNormal, arrBlueEasy, arrBlueSuperEasy, arrBlueSuperHard, CoatFirstBlue)   //stage1
                               
        shuffleEnd()    
}

function shuffleEnd() {
    shuffleArr(stageOneDeckStack)
    shuffleArr(stageTwoDeckStack)
    shuffleArr(stageThreeDeckStack)
  }   
            
            function creatDeck (){
                difficulty.forEach(function(e) {
                    if(e.contains(normal) && e.classList.contains('active')) {
                        createArrColor (createArrStageNormal)  
                 }   else if(e.contains(easy) && e.classList.contains('active')) {
                        createArrColor (creatArrColorEasy)     
                 }  else if(e.contains(hard) && e.classList.contains('active')) {
                    createArrColor (creatArrColorHard)     
                 } else if(e.contains(superHard) && e.classList.contains('active')) {
                    createArrColor (creatArrColorSuperHard)     
                 } else if(e.contains(superEasy) && e.classList.contains('active')) {
                    createArrColor (creatArrColorSuperEasy)     
                 }    
                } ) } 

            function mainShuffle() {
                
                ancientCards.forEach(function(e) {
                    if(e.contains(azathoth) && e.classList.contains('active')) {
                        arrBrownSuperEasy = arrBrownSuperEasyStart.slice(0,9)
                        arrGreenSuperEasy = arrGreenSuperEasyStart.slice(0,5)
                        arrBlueSuperEasy = arrBlueSuperEasyStart.slice(0,2)
                        arrBrownSuperHard = arrBrownSuperHardStart.slice(0,9)
                        arrGreenSuperHard = arrGreenSuperHardStart.slice(0,5)
                        arrBlueSuperHard = arrBlueSuperHardStart.slice(0,2)
                        Coaatt (0);
                        creatDeck () } 
                    if(e.contains(cthulthu) && e.classList.contains('active')) {
                        arrBrownSuperEasy = arrBrownSuperEasyStart.slice(0,9)
                        arrGreenSuperEasy = arrGreenSuperEasyStart.slice(0,4)
                        arrBlueSuperEasy = arrBlueSuperEasyStart.slice(0,2)
                        arrBrownSuperHard = arrBrownSuperHardStart.slice(0,9)
                        arrGreenSuperHard = arrGreenSuperHardStart.slice(0,4)
                        arrBlueSuperHard = arrBlueSuperHardStart.slice(0,2)
                        Coaatt (1);
                        creatDeck ()}
                    if(e.contains(iogSothoth) && e.classList.contains('active')) {
                        arrBrownSuperEasy = arrBrownSuperEasyStart.slice(0,9)
                        arrGreenSuperEasy = arrGreenSuperEasyStart.slice(0,5)
                        arrBlueSuperEasy = arrBlueSuperEasyStart.slice(0,2)
                        arrBrownSuperHard = arrBrownSuperHardStart.slice(0,9)
                        arrGreenSuperHard = arrGreenSuperHardStart.slice(0,5)
                        arrBlueSuperHard = arrBlueSuperHardStart.slice(0,2)
                        Coaatt (2);
                        creatDeck ()}
                    if(e.contains(shubNiggurath) && e.classList.contains('active')) {
                        arrBrownSuperEasy = arrBrownSuperEasyStart.slice(0,8)
                        arrGreenSuperEasy = arrGreenSuperEasyStart.slice(0,6)
                        arrBlueSuperEasy = arrBlueSuperEasyStart.slice(0,2)
                        arrBrownSuperHard = arrBrownSuperHardStart.slice(0,8)
                        arrGreenSuperHard = arrGreenSuperHardStart.slice(0,6)
                        arrBlueSuperHard = arrBlueSuperHardStart.slice(0,2)
                        Coaatt (3);
                        creatDeck ()}  
            })}

        deck.addEventListener('click', function(){
         if (stageOneDeckStack.length > 0){
            let lastImg = stageOneDeckStack.pop();
            lastCard.style.backgroundImage = `url(./assets/MythicCards/allcards/${lastImg}.png)`
            if(lastImg.includes('green')){
                first.querySelector('.green').textContent = first.querySelector('.green').textContent - 1
            }
            if(lastImg.includes('brown')){
                first.querySelector('.brown').textContent = first.querySelector('.brown').textContent - 1
            }
            if(lastImg.includes('blue')){
                first.querySelector('.blue').textContent = first.querySelector('.blue').textContent - 1
            }
         if (stageOneDeckStack.length == 0) {
            stageTextOne.classList.add('done')
         }
         }
         else {
            if (stageTwoDeckStack.length > 0){
                let lastImg = stageTwoDeckStack.pop();
                lastCard.style.backgroundImage = `url(./assets/MythicCards/allcards/${lastImg}.png)`
                if(lastImg.includes('green')){
                    second.querySelector('.green').textContent = second.querySelector('.green').textContent - 1
                }
                if(lastImg.includes('brown')){
                    second.querySelector('.brown').textContent = second.querySelector('.brown').textContent - 1
                }
                if(lastImg.includes('blue')){
                    second.querySelector('.blue').textContent = second.querySelector('.blue').textContent - 1
                }
                if (stageTwoDeckStack.length == 0) {
                    stageTextTwo.classList.add('done')
                    }   
             } else {
                if (stageThreeDeckStack.length > 0){
                    let lastImg = stageThreeDeckStack.pop();
                    lastCard.style.backgroundImage = `url(./assets/MythicCards/allcards/${lastImg}.png)`
                    if(lastImg.includes('green')){
                        third.querySelector('.green').textContent = third.querySelector('.green').textContent - 1
                    }
                    if(lastImg.includes('brown')){
                        third.querySelector('.brown').textContent = third.querySelector('.brown').textContent - 1
                    }
                    if(lastImg.includes('blue')){
                        third.querySelector('.blue').textContent = third.querySelector('.blue').textContent - 1
                    }
                    if (stageThreeDeckStack.length == 0) {
                        stageTextThree.classList.add('done')
                        }   
                 } 
                 if (stageThreeDeckStack.length == 0) {
                    deck.classList.add('deactive')
                 }
             } 
        }
    })
