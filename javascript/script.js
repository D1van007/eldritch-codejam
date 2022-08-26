// import {ancientsData} from './assets/ancients'

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

//Coaatt
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

let stageOneDeckStack = []
let stageTwoDeckStack = []
let stageThreeDeckStack = []

let arrBlueSnow = []
let arrBlueNorml = []
let arrBlueOctopus= []

let arrBrownSnow = []
let arrBrownNorml= []
let arrBrownOctopus = []

let arrGreenSnow = []
let arrGreenNorml= []
let arrGreenOctopus = []

function retry (){
    stageOneDeckStack.length = 0;
    stageTwoDeckStack.length = 0;
    stageThreeDeckStack.length = 0;
    deck.classList.remove('deactive');
    lastCard.style.backgroundImage = `none`;
    stageTextOne.classList.remove('done')
    stageTextTwo.classList.remove('done')
    stageTextThree.classList.remove('done')

    arrBlueSnow = cardsDataBlue.filter(c =>c.difficulty == 'easy').map(function(c){return c.id});
    arrBlueNorml = cardsDataBlue.filter(c =>c.difficulty == 'normal').map(function(c){return c.id});
    arrBlueOctopus = cardsDataBlue.filter(c =>c.difficulty == 'hard').map(function(c){return c.id});

    arrBrownSnow = cardsDataBrown.filter(c =>c.difficulty == 'easy').map(function(c){return c.id});
    arrBrownNorml = cardsDataBrown.filter(c =>c.difficulty == 'normal').map(function(c){return c.id});
    arrBrownOctopus = cardsDataBrown.filter(c =>c.difficulty == 'hard').map(function(c){return c.id});
    
    arrGreenSnow = cardsDataGreen.filter(c =>c.difficulty == 'easy').map(function(c){return c.id});
    arrGreenNorml = cardsDataGreen.filter(c =>c.difficulty == 'normal').map(function(c){return c.id});
    arrGreenOctopus = cardsDataGreen.filter(c =>c.difficulty == 'hard').map(function(c){return c.id});
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
            
            {
            shuffle.classList.remove('active')
            deckСontainer.classList.add('active')
            mainShuffle();
            
            console.log(stageOneDeckStack)
            console.log(stageTwoDeckStack)
            console.log(stageThreeDeckStack)}
         } );

//общие основные функции
     
            function shuffleArr(array) {
                for (let i = array.length - 1; i > 0; i--) {
                  let j = Math.floor(Math.random() * (i + 1));
                  [array[i], array[j]] = [array[j], array[i]];
                }
              }
//Средний уроыень сложности
function creatArrColorNormal (arrayStage, arrColorSnow, arrColorNorml, arrColorOctopus, q) {
    for (let i = 1; i <= q; i++){
    let x = Math.floor(Math.random() * (4 - 1)) + 1
    if(x == 1){
        arrayStage.push(arrColorSnow.pop())
    }
    else if(x == 2){
        arrayStage.push(arrColorNorml.pop())
    }
    else if(x == 3) {
        arrayStage.push(arrColorOctopus.pop())
    } 
}
}

//Легкий уроыень сложности
function creatArrColorEasy (arrayStage, arrColorSnow, arrColorNorml, arrColorOctopus, q) {
    for (let i = 1; i <= q; i++){
    let x = Math.floor(Math.random() * (3 - 1)) + 1
    if(x == 1){
        arrayStage.push(arrColorSnow.pop())
    }
    else if(x == 2){
        arrayStage.push(arrColorNorml.pop())
    }
}
}

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
                 //stage3
                    //brown          
                    createArr(stageThreeDeckStack, arrBrownSnow, arrBrownNorml, arrBrownOctopus, CoatThirdBrown)        
                    //green
                    createArr (stageThreeDeckStack, arrGreenSnow, arrGreenNorml, arrGreenOctopus, CoatThirdGreen)
                    //blue
                    createArr (stageThreeDeckStack, arrBlueSnow, arrBlueNorml, arrBlueOctopus, CoatThirdBlue)
                //stage2
                    //brown          
                    createArr (stageTwoDeckStack, arrBrownSnow, arrBrownNorml, arrBrownOctopus, CoatSecondBrown)        
                    //green
                    createArr (stageTwoDeckStack, arrGreenSnow, arrGreenNorml, arrGreenOctopus, CoatSecondGreen)
                    //blue
                    createArr (stageTwoDeckStack, arrBlueSnow, arrBlueNorml, arrBlueOctopus, CoatSecondBlue)                       
                //stage1
                    //brown          
                    createArr (stageOneDeckStack, arrBrownSnow, arrBrownNorml, arrBrownOctopus, CoatFirstBrown)        
                    //green
                    createArr (stageOneDeckStack, arrGreenSnow, arrGreenNorml, arrGreenOctopus, CoatFirstGreen)
                    //blue
                    createArr (stageOneDeckStack, arrBlueSnow, arrBlueNorml, arrBlueOctopus, CoatFirstBlue)   
                            
                    shuffleEnd()
}

function shuffleEnd() {
    shuffleArr(stageOneDeckStack)
    shuffleArr(stageTwoDeckStack)
    shuffleArr(stageThreeDeckStack)
  }   
            //Coat stage

            function creatDeck (){

                difficulty.forEach(function(e) {
                    if(e.contains(normal) && e.classList.contains('active')) {
                        createArrColor (creatArrColorNormal)  
                 }   else if(e.contains(easy) && e.classList.contains('active')) {
                    createArrColor (creatArrColorEasy) 
           
         } }
             
             ) } 

            function mainShuffle() {
                shuffleArr(arrBrownSnow)
                shuffleArr(arrBrownNorml)
                shuffleArr(arrBrownOctopus)
                shuffleArr(arrGreenSnow)
                shuffleArr(arrGreenNorml)
                shuffleArr(arrGreenOctopus)
                shuffleArr(arrBlueSnow)
                shuffleArr(arrBlueNorml)
                shuffleArr(arrBlueOctopus)
                
                ancientCards.forEach(function(e) {
                    if(e.contains(azathoth) && e.classList.contains('active')) {
                        Coaatt (0);
                        creatDeck () } 
                    if(e.contains(cthulthu) && e.classList.contains('active')) {
                        Coaatt (1);
                        creatDeck ()}
                    if(e.contains(iogSothoth) && e.classList.contains('active')) {
                        Coaatt (2);
                        creatDeck ()}
                    if(e.contains(shubNiggurath) && e.classList.contains('active')) {
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
