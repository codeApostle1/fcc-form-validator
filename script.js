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

let isError = false;


function cleanInputString(str){
    const regex = /[+-\s]/g;
    // this regex will remove all the +, - and spaces from the string and g is a flag for global search

   return str.replace(regex, '');
    // this will replace all the +, - and spaces with an empty string

}

// this is it o yes po