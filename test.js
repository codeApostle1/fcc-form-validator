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