window.onload=function(){

//All the variables//
let finalResult = '';
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
    clearScreenWithReset();
    
});
console.log(finalResult);


//function for showing any button pressed on screen//
allButtons.forEach((button1)=>{
    button1.addEventListener('click',()=>{

        emptyScreen();

        
        

        calculateAnswer(button1);
        
        });
    
    });

//Function for operation/calculation //
 function operate(a,b){
    if(addIsPressed==true){
        addIsPressed=false;
        return a+b;
        
    }

    if(subtractIsPressed==true){
        subtractIsPressed=false;
        return a-b;
    } 

    if(multiplyIsPressed==true){
        multiplyIsPressed=false;
        return  a*b;
    } 

    if(divideIsPressed==true){
        divideIsPressed=false;
        return a/b;
    } 
    
 };

 //Function to clear screen after an answer//
    function emptyScreen(){
    if(screen.textContent.includes('answer') ){
        screen.textContent = '';
    }
    // if(finalResult!=''){
    //     screen.textContent = finalResult;
    // }

};

//Function for clearing screen at any time when reset is pressed//
    function clearScreenWithReset(){
        screen.textContent = "";
        finalResult = '';
    };
     
   //Function for the arithmetical operations//
   function calculateAnswer(button1){

        if(equalIsPressed===false){
            
            if(finalResult!=''){
                    screen.textContent=finalResult;  
                    finalResult='';
            }  
        screen.textContent+=button1.textContent;
        };   

         if(equalIsPressed===true&&screen.textContent){
            
            let result = screen.textContent.split(/[\n+\-*/]/).map(str => str.trim()).filter(Boolean);
            let arithmeticOrder = screen.textContent.match(/[-+/*]/g);
            console.log(result);
            console.log(arithmeticOrder);
            if (result.length<=arithmeticOrder.length){
                result.unshift(0);
                
            }
                
            
            arithmeticOrder.forEach((operator)=>{

               
                var processedValue = performOperation(operator,Number(result[0]),Number(result[1]));
                result.shift();
                result.shift();
                result.unshift(processedValue);
                finalResult=processedValue;
                if(result.length==1){
                    screen.textContent="answer"+":"+screen.textContent+"="+finalResult;
                    
                }
               
                
            })
            
            equalIsPressed=false;
             
        }
             
        };
   }; 


   //Function that gives output according to operator used//
   function performOperation(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return null;
    }
}
