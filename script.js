const list = [
    {
        question: 'Q1. JavaScript is a __________ language',
        options: [
            { option: 'Object Oriented', correct: true },
            { option: 'Object Based', correct: false },
            { option: 'Procedural', correct: false },
            { option: 'Compiler', correct: false }
        ]
    },
    {
        question: 'Q2. Which of the following keywords is used to define a variable in Javascript?',
        options: [
            { option: 'var', correct: false },
            { option: 'let', correct: false },
            { option: 'const', correct: false },
            { option: 'All of the above', correct: true }
        ]
    },
    {
        question: 'Q3. Which of the following methods is used to access HTML elements using Javascript?',
        options: [
            { option: 'getElement', correct: false },
            { option: 'getElementById', correct: true },
            { option: 'accessElement', correct: false },
            { option: 'None of the above', correct: false }
        ]
    },
    {
        question: 'Q4. Upon encountering empty statements, what does the Javascript Interpreter do?',
        options: [
            { option: 'Throws an error', correct: false },
            { option: 'Ignores the statements', correct: true },
            { option: 'Giving a warning', correct: false },
            { option: 'Prints undefined', correct: false }
        ]
    },
    {
        question: 'Q5. Which of the following methods can be used to display data in some form using Javascript?',
        options: [
            { option: 'document.display()', correct: false },
            { option: 'print()', correct: false },
            { option: 'document.write()', correct: true },
            { option: 'show()', correct: false }
        ]
    },
    {
        question: 'Q6. When the switch statement matches the expression with the given labels, how is the comparison done?',
        options: [
            { option: 'compares datatype and the result', correct: true },
            { option: 'compares only the result', correct: false },
            { option: 'compares only the datatype', correct: false },
            { option: 'compares nothing', correct: false }
        ]
    },
    {
        question: 'Q7. What keyword is used to check whether a given property is valid or not?',
        options: [
            { option: 'lies', correct: false },
            { option: 'exists', correct: false },
            { option: 'is in', correct: false },
            { option: 'in', correct: true }
        ]
    },
    {
        question: 'Q8. What is the use of noscript tag in Javascript?',
        options: [
            { option: 'clear cache', correct: false },
            { option: 'to display on non JS based browswers', correct: true },
            { option: 'clear cookies', correct: false },
            { option: 'when no JS is used', correct: false }
        ]
    },
    {
        question: 'Q9. When an operator’s value is NULL, the typeof returned by the unary operator is:',
        options: [
            { option: 'Boolean', correct: false },
            { option: 'Undefined', correct: false },
            { option: 'Object', correct: true },
            { option: 'Null', correct: false }
        ]
    },
    {
        question: 'Q10. What is the output of Math.max() and Math.min()?',
        options: [
            { option: '-Infinity Infinity', correct: true },
            { option: 'Infinity -Infinity', correct: false },
            { option: 'Infinity Infinity', correct: false },
            { option: '-Infinity -Infinity', correct: false }
        ]
    },   
]

let array = list[Symbol.iterator]()
let values;
let call;
let done;

function iterate(){
    call = array.next()
    values = call.value
    done = call.done
    document.getElementById('container').innerHTML = '';
    let div = document.createElement('div');
    let html;
    if(done){
        html = `<p class="text-[1.7rem]">Thank you for attending the quiz</p>`
    }else{
        html = `<p class="text-[1.7rem]">${values.question}</p>
        <button class="bg-green-200 px-5 py-2 m-6 mt-[5rem] rounded-lg w-[20%]" onclick="check(0)" id="0">${values.options[0].option}</button>
        <button class="bg-green-200 px-5 py-2 m-6 mt-[5rem] rounded-lg w-[20%]" onclick="check(1)" id="1">${values.options[1].option}</button>
        <br>
        <button class="bg-green-200 px-5 py-2 m-6 rounded-lg w-[20%]" onclick="check(2)" id="2">${values.options[2].option}</button>
        <button class="bg-green-200 px-5 py-2 m-6 rounded-lg w-[20%]" onclick="check(3)" id="3">${values.options[3].option}</button>
        <br>
        <button class="bg-blue-200 px-4 py-2 rounded-lg" id="start" onclick="iterate()">NEXT</button>`
    } 
    div.innerHTML = html
    document.getElementById('container').appendChild(div)
}

function check(index){
    if(values.options[index].correct){
        document.getElementById(index).style.backgroundColor="rgb(34,197,94)"
    }
    else{
        document.getElementById(index).style.backgroundColor="rgb(248,113,113)"
    }
}

