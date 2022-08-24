// import {ancientsData} from './assets/ancients'

// import ancientsData from "./data/ancients.js";

const ancientCard = document.querySelector('.ancients-container')
const azathoth = document.getElementById('azathoth')
const cthulthu = document.getElementById('cthulthu')
const iogSothoth = document.getElementById('iogSothoth')
const shubNiggurath = document.getElementById('shubNiggurath')

const ancientCards = document.querySelectorAll('.ancient-card')
let isContainAncient = false;


// let hero;
const difficultyLevel = document.querySelector('.difficulty-container');
const difficulty =document.querySelectorAll('.difficulty')

const deck = document.querySelector('.deck')
const lastCard = document.querySelector('.last-card')

// console.log(ancientsData[0].id);

let isContainDifficulty = false;

const shuffle = document.querySelector('.shuffle-button')
const deckСontainer = document.querySelector('.deck-container')


const mainDeckStack = []
let stageOneDeckStack = []
let stageTwoDeckStack = []
let stageThreeDeckStack = []

let arrBlueSnow = ['blue3', 'blue4', 'blue5', 'blue10']
let arrBlueNorml = ['blue7', 'blue9', 'blue11', 'blue12']
let arrBlueOctopus= ['blue1', 'blue2', 'blue6', 'blue8']

let arrBrownSnow = ['brown11', 'brown12', 'brown13', 'brown14', 'brown21']
let arrBrownNorml= ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown4', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20']
let arrBrownOctopus = ['brown6', 'brown7', 'brown8', 'brown9', 'brown10']

let arrGreenSnow = ['green1', 'green16', 'green17', 'green18']
let arrGreenNorml= ['green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15']
let arrGreenOctopus = ['green2', 'green3', 'green4', 'green5', 'green6']

function retry (){
    stageOneDeckStack.length = 0;
    stageTwoDeckStack.length = 0;
    stageThreeDeckStack.length = 0;
    arrBlueSnow = ['blue3', 'blue4', 'blue5', 'blue10'];
    arrBlueNorml = ['blue7', 'blue9', 'blue11', 'blue12'];
    arrBlueOctopus= ['blue1', 'blue2', 'blue6', 'blue8'];

    arrBrownSnow = ['brown11', 'brown12', 'brown13', 'brown14', 'brown21']
    arrBrownNorml= ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown4', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20']
    arrBrownOctopus = ['brown6', 'brown7', 'brown8', 'brown9', 'brown10']
    
    arrGreenSnow = ['green1', 'green16', 'green17', 'green18']
    arrGreenNorml= ['green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15']
    arrGreenOctopus = ['green2', 'green3', 'green4', 'green5', 'green6']
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

                    return;

                }
              });
              if (isContainAncient) {
                document.querySelector('.difficulty-container').classList.add('active');
                deckСontainer.classList.remove('active')
                retry ()
            }
            
        });

        difficultyLevel.addEventListener('click', function(event){
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
        });

      

        shuffle.addEventListener('click', () => {
            shuffle.classList.remove('active')
            deckСontainer.classList.add('active')
            ancientCoat ();
            shuffleEnd()
            console.log(stageOneDeckStack)
            console.log(stageTwoDeckStack)
            console.log(stageThreeDeckStack)
        });
    
       



            // const arrBlue = [arrBlueSnow, arrBlueNorml ,arrBlueOctopus] //[0] - снежинка, [1] - норрмал, [2] - щупальцы
            // const arrBrown = [[],[],[]]
            // const arrGreen = [[],[],[]]
            // const arrStageOne = [[],[],[]]
            // const arrStageTwo = [[],[],[]]
            // const arrStageThree = [[],[],[]]
 
        

     
            function shuffleArr(array) {
                for (let i = array.length - 1; i > 0; i--) {
                  let j = Math.floor(Math.random() * (i + 1));
                  [array[i], array[j]] = [array[j], array[i]];
                }
              }
   

            //Coat stage


            function ancientCoat () {
                const first = document.querySelector('.first')
                const second = document.querySelector('.second')
                const third = document.querySelector('.third')
                ancientCards.forEach(function(e) {
                    if(e.contains(azathoth) && e.classList.contains('active')) {
                        first.querySelector('.green').textContent = 1 //потом хоу прописать длинной массива
                        first.querySelector('.brown').textContent = 2
                        first.querySelector('.blue').textContent = 1
                        second.querySelector('.green').textContent = 2 
                        second.querySelector('.brown').textContent = 3
                        second.querySelector('.blue').textContent = 1
                        third.querySelector('.green').textContent = 2 
                        third.querySelector('.brown').textContent = 4
                        third.querySelector('.blue').textContent = 0


            //stage3
                        //brown
                        for (let i = 1; i<=4; i++){
                            let x = Math.floor(Math.random() * (4 - 1)) + 1
                            if(x == 1){
                                shuffleArr(arrBrownSnow)
                                stageThreeDeckStack.push(arrBrownSnow[arrBrownSnow.length - 1])
                                arrBrownSnow.pop()
                            }
                            else if(x == 2){
                                shuffleArr(arrBrownNorml)
                                stageThreeDeckStack.push(arrBrownNorml[arrBrownNorml.length - 1])
                                arrBrownNorml.pop()
                            }
                            else {
                                shuffleArr(arrBrownOctopus)
                                stageThreeDeckStack.push(arrBrownOctopus[arrBrownOctopus.length - 1])
                                arrBrownOctopus.pop()
                            } 
                        }
                        //green
                        for (let i = 1; i<=2; i++){
                            let x = Math.floor(Math.random() * (4 - 1)) + 1
                            if(x == 1){
                                shuffleArr(arrGreenSnow)
                                stageThreeDeckStack.push(arrGreenSnow[arrGreenSnow.length - 1])
                                arrGreenSnow.pop()
                            }
                            else if(x == 2){
                                shuffleArr(arrGreenNorml)
                                stageThreeDeckStack.push(arrGreenNorml[arrGreenNorml.length - 1])
                                arrGreenNorml.pop()
                            }
                            else {
                                shuffleArr(arrGreenOctopus)
                                stageThreeDeckStack.push(arrGreenOctopus[arrGreenOctopus.length - 1])
                                arrGreenOctopus.pop()
                            }} 
             //stage2
                        //blue
                        for (let i = 1; i<=1; i++){
                            let x = Math.floor(Math.random() * (4 - 1)) + 1
                            if(x == 1){
                                shuffleArr(arrBlueSnow)
                                stageTwoDeckStack.push(arrBlueSnow[arrBlueSnow.length - 1])
                                arrBlueSnow.pop()
                            }
                            else if(x == 2){
                                shuffleArr(arrBlueNorml)
                                stageTwoDeckStack.push(arrBlueNorml[arrBlueNorml.length - 1])
                                arrBlueNorml.pop()
                            }
                            else {
                                shuffleArr(arrBlueOctopus)
                                stageTwoDeckStack.push(arrBlueOctopus[arrBlueOctopus.length - 1])
                                arrBlueOctopus.pop()
                            } 
                        }
                     //brown
                     for (let i = 1; i<=3; i++){
                        let x = Math.floor(Math.random() * (4 - 1)) + 1
                        if(x == 1){
                            shuffleArr(arrBrownSnow)
                            stageTwoDeckStack.push(arrBrownSnow[arrBrownSnow.length - 1])
                            arrBrownSnow.pop()
                        }
                        else if(x == 2){
                            shuffleArr(arrBrownNorml)
                            stageTwoDeckStack.push(arrBrownNorml[arrBrownNorml.length - 1])
                            arrBrownNorml.pop()
                        }
                        else {
                            shuffleArr(arrBrownOctopus)
                            stageTwoDeckStack.push(arrBrownOctopus[arrBrownOctopus.length - 1])
                            arrBrownOctopus.pop()
                        } 
                    }
                    //green
                    for (let i = 1; i<=2; i++){
                        let x = Math.floor(Math.random() * (4 - 1)) + 1
                        if(x == 1){
                            shuffleArr(arrGreenSnow)
                            stageTwoDeckStack.push(arrGreenSnow[arrGreenSnow.length - 1])
                            arrGreenSnow.pop()
                        }
                        else if(x == 2){
                            shuffleArr(arrGreenNorml)
                            stageTwoDeckStack.push(arrGreenNorml[arrGreenNorml.length - 1])
                            arrGreenNorml.pop()
                        }
                        else {
                            shuffleArr(arrGreenOctopus)
                            stageTwoDeckStack.push(arrGreenOctopus[arrGreenOctopus.length - 1])
                            arrGreenOctopus.pop()
                        } 

                }
                //stage1
                        //blue
                        for (let i = 1; i<=1; i++){
                            let x = Math.floor(Math.random() * (4 - 1)) + 1
                            if(x == 1){
                                shuffleArr(arrBlueSnow)
                                stageOneDeckStack.push(arrBlueSnow[arrBlueSnow.length - 1])
                                arrBlueSnow.pop()
                            }
                            else if(x == 2){
                                shuffleArr(arrBlueNorml)
                                stageOneDeckStack.push(arrBlueNorml[arrBlueNorml.length - 1])
                                arrBlueNorml.pop()
                            }
                            else {
                                shuffleArr(arrBlueOctopus)
                                stageOneDeckStack.push(arrBlueOctopus[arrBlueOctopus.length - 1])
                                arrBlueOctopus.pop()
                            } 
                        }
                     //brown
                     for (let i = 1; i<=2; i++){
                        let x = Math.floor(Math.random() * (4 - 1)) + 1
                        if(x == 1){
                            shuffleArr(arrBrownSnow)
                            stageOneDeckStack.push(arrBrownSnow[arrBrownSnow.length - 1])
                            arrBrownSnow.pop()
                        }
                        else if(x == 2){
                            shuffleArr(arrBrownNorml)
                            stageOneDeckStack.push(arrBrownNorml[arrBrownNorml.length - 1])
                            arrBrownNorml.pop()
                        }
                        else {
                            shuffleArr(arrBrownOctopus)
                            stageOneDeckStack.push(arrBrownOctopus[arrBrownOctopus.length - 1])
                            arrBrownOctopus.pop()
                        } 
                    }
                    //green
                    for (let i = 1; i<=1; i++){
                        let x = Math.floor(Math.random() * (4 - 1)) + 1
                        if(x == 1){
                            shuffleArr(arrGreenSnow)
                            stageOneDeckStack.push(arrGreenSnow[arrGreenSnow.length - 1])
                            arrGreenSnow.pop()
                        }
                        else if(x == 2){
                            shuffleArr(arrGreenNorml)
                            stageOneDeckStack.push(arrGreenNorml[arrGreenNorml.length - 1])
                            arrGreenNorml.pop()
                        }
                        else {
                            shuffleArr(arrGreenOctopus)
                            stageOneDeckStack.push(arrGreenOctopus[arrGreenOctopus.length - 1])
                            arrGreenOctopus.pop()
                        } }



                    if(e.contains(cthulthu) && e.classList.contains('active')) {
                        first.querySelector('.green').textContent = 0 //потом хоу прописать длинной массива
                        first.querySelector('.brown').textContent = 2
                        first.querySelector('.blue').textContent = 2
                        second.querySelector('.green').textContent = 1 
                        second.querySelector('.brown').textContent = 3
                        second.querySelector('.blue').textContent = 0
                        third.querySelector('.green').textContent = 3 
                        third.querySelector('.brown').textContent = 4
                        third.querySelector('.blue').textContent = 0
                }
                    if(e.contains(iogSothoth) && e.classList.contains('active')) {
                        first.querySelector('.green').textContent = 0 //потом хоу прописать длинной массива
                        first.querySelector('.brown').textContent = 2
                        first.querySelector('.blue').textContent = 1
                        second.querySelector('.green').textContent = 2 
                        second.querySelector('.brown').textContent = 3
                        second.querySelector('.blue').textContent = 1
                        third.querySelector('.green').textContent = 3 
                        third.querySelector('.brown').textContent = 4
                        third.querySelector('.blue').textContent = 0
                }
                    if(e.contains(shubNiggurath) && e.classList.contains('active')){
                        first.querySelector('.green').textContent = 1 //потом хоу прописать длинной массива
                        first.querySelector('.brown').textContent = 2
                        first.querySelector('.blue').textContent = 1
                        second.querySelector('.green').textContent = 2 
                        second.querySelector('.brown').textContent = 3
                        second.querySelector('.blue').textContent = 1
                        third.querySelector('.green').textContent = 2 
                        third.querySelector('.brown').textContent = 4
                        third.querySelector('.blue').textContent = 0
                    }
                
                    
            }})
            
        }
          function shuffleEnd() {
            shuffleArr(stageOneDeckStack)
            shuffleArr(stageTwoDeckStack)
            shuffleArr(stageThreeDeckStack)
          }   

        deck.addEventListener('click', function(event){
         if (stageOneDeckStack.length > 0){
            let lastImg = stageOneDeckStack.pop();
            lastCard.style.backgroundImage = `url(./assets/MythicCards/allcards/${lastImg}.png)`

         }
         else {
            if (stageTwoDeckStack.length > 0){
                let lastImg = stageTwoDeckStack.pop();
                lastCard.style.backgroundImage = `url(./assets/MythicCards/allcards/${lastImg}.png)`
    
             }
             else {
                if (stageThreeDeckStack.length > 0){
                    let lastImg = stageThreeDeckStack.pop();
                    lastCard.style.backgroundImage = `url(./assets/MythicCards/allcards/${lastImg}.png)`
        
                 }
             

         }

        }
        // console.log(stageOneDeckStack.pop())
        // console.log(stageTwoDeckStack.pop())
        // console.log(stageThreeDeckStack.pop())
    })


// function abc() {
    // difficultyLevel = 'Easy';

//     document.querySelector('.difficulty').classList.add('active');
// }

// switch(hero):
// case '':
//     if ('ease') {

//     } else if ('hard') {

//     }
//     break;
