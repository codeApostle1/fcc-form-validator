const calorieCounter = document.getElementById('calorie-counter'); 
// for the form

const budgetNumberInput = document.getElementById('budget');
// for the budget top input

const entryDropdown = document.getElementById('entry-dropdown');
// for thr dropdown below the form

const addEntryButton = document.getElementById('add-entry');
// for the add entry button

const clearButton = document.getElementById('clear');
// for the clear button

const output = document.getElementById('output');
// for the output below the clear button


// /////////////////////////test field

const input = document.getElementById('input')

const testText = document.getElementById('text')

const testButton = document.getElementById('testButton')

const textWord = testText.innerText

testButton.addEventListener('click', testFunction)



function testFunction(){
   alert(textWord.match(/text/g))
   console.log(textWord.match(/text/g));
   
}

// ////////////////////////end test

let isError = false;


function cleanInputString(str){
    const regex = /[+-\s]/g;
    // this regex will remove all the +, - and spaces from the string and g is a flag for global search

   
    

   return str.replace(regex, '');
    // this will replace all the +, - and spaces with an empty string

}


function isInvalidInput(str){
//    const regex = /[0-9]+e[0-9]+/i; THIS IS LONG CUT, A SHORTER WAY IS TO USETHE \d SHORTHAND
  

const regex = /\d+e\d+/i;
  return str.match(regex)

}

