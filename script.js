window.onload=function(){

//All the variables//
let firstNumber = '';
let secondNumber = '';
const addButton = document.querySelector('#addbutton');
const subtractButton = document.querySelector('#subtractbutton');
const multiplyButton = document.querySelector('#multiplybutton');
const divideButton = document.querySelector('#dividebutton');
const equalButton = document.querySelector('#equalbutton');
const resetButton = document.querySelector('#resetbutton')
let addIsPressed=false;
let subtractIsPressed=false;
let multiplyIsPressed=false;
let divideIsPressed=false;
let equalIsPressed=false;
let resetIsPressed=false;

const allButtons = document.querySelectorAll('.buttons');
const screen = document.querySelector('.screen');


   

//event listener for add button//
addButton.addEventListener('click',()=>{
    addIsPressed=true;
});

//event listener for subtract button//
subtractButton.addEventListener('click',()=>{
    subtractIsPressed=true;
    
});

//event listener for multiply button//
multiplyButton.addEventListener('click',()=>{
    multiplyIsPressed=true;
    
});

//event listener for divide button//
divideButton.addEventListener('click',()=>{
    divideIsPressed=true;
    
});

//event listener for equal button//
equalButton.addEventListener('click',()=>{
    equalIsPressed=true;
    
});

//event listener for reset button//
resetButton.addEventListener('click',()=>{
    resetIsPressed=true;
    
});


  
//function for showing any button pressed on screen//

allButtons.forEach((button1)=>{
    button1.addEventListener('click',()=>{

        if(screen.textContent.includes('answer') ){
            screen.textContent='';
        }

        const removeP = document.querySelector('.answer');
        if(removeP){
            removeP.remove();
        };
        if(resetIsPressed){
            screen.textContent = "";
            resetIsPressed = false;
            return;

        }
        if(equalIsPressed===false){
        screen.textContent+=button1.textContent;
        }    
        if(equalIsPressed===true){
        let result = screen.textContent.split(/[\n+\-*/]/).map(str => str.trim()).filter(Boolean);
        firstNumber=Number(result[0]);
        secondNumber=Number(result[1]);
        equalIsPressed=false;

        if(addIsPressed==true){
           let finalResult = firstNumber+secondNumber;
           addIsPressed=false; 
           screen.textContent="Your answer is : "+finalResult;
        }

        if(subtractIsPressed==true){
            let finalResult = firstNumber-secondNumber;
            subtractIsPressed=false; 
            screen.textContent="Your answer is : "+finalResult;
         }

         if(multiplyIsPressed==true){
            let finalResult = firstNumber*secondNumber;
            multiplyIsPressed=false; 
            screen.textContent="Your answer is : "+finalResult;
         }

         if(divideIsPressed==true){
            let finalResult = firstNumber/secondNumber;
            divideIsPressed=false; 
            screen.textContent="Your answer is : "+finalResult;
         }
        return;
        }
        // if(addIsPressed){
        //     firstNumber=Number(screen.textContent);
        //     console.log
        // }
    });
});
console.log(secondNumber);
}