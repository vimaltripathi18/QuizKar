const questions = [
{
    question: "What is the correct syntax for declaring a variable in C?", //1
    answers : [
        {text: "int variable" , correct: true},
        {text: " variable int" , correct: false},
        {text: "declare variable int" , correct: false},
        {text: "var int" , correct: false},
    ]
 },
 {
    question: "Which of the following is not a valid data type in C?", //2
    answers : [
        {text: "float" , correct: false },
        {text: " real" , correct:true},
        {text: "double" , correct: false},
        {text: "char" , correct: false},
    ]
 },
 {
    question: "What is the purpose of the break statement in C?", //3
    answers : [
        {text: "Terminates the program" , correct: false },
        {text: " Exits the current loop or switch statement" , correct:true},
        {text: "Skips the next iteration of a loop" , correct: false},
        {text: "Jumps to a specific label" , correct: false},
    ]
 },
 {
    question: "In C, how do you declare a constant?", //4
    answers : [
        {text: "const int x" , correct: true },
        {text: "constant x" , correct:false},
        {text: " int constant x" , correct: false},
        {text: "#define x const" , correct: false},
    ]  
 },
 {
    question: "What is the correct way to initialize an array in C?",  //5
    answers : [
        {text: "int arr[5] = {1, 2, 3, 4, 5}" , correct: false },
        {text: "int arr[] = {1, 2, 3, 4, 5}" , correct:false},
        {text: " int arr[5] = {1, 2, 3}" , correct: false},
        {text: "Both a and b" , correct: true},
    ]  
 },
 {
    question: "What does the sizeof operator in C return?",   //6
    answers : [
        {text: "The size of variable" , correct: false },
        {text: "The size of the data type" , correct:true},
        {text: "The memory address" , correct: false},
        {text: "Size of the function" , correct: false},
    ] 
 },
 {
    question: "Which of the following is not a valid way to pass arguments to a function in C?", //7
    answers : [
        {text: "Pass by Value" , correct: false },
        {text: "Pass by refrence" , correct: false},
        {text: "pass by pointer" , correct: false},
        {text: "Pass by array" , correct: true},
    ]  
 },
 {
    question: "In C, how do you declare a pointer variable?", //8
    answers : [
        {text: "int * ptr" , correct: true },
        {text: "ptr int" , correct: false},
        {text: "pointer int *ptr" , correct: false},
        {text: "int ptr" , correct: false},
    ]    
 },
 {
    question: "What is the purpose of the strcpy function in C?", //9
    answers : [
        {text: "Concatenate two strings" , correct: false },
        {text: "Concatenate two strings" , correct: false},
        {text: "Copy one string to another" , correct: true},
        {text: "Find the length of a string" , correct: false},
    ]    
 },
 {
    question: " What is the result of the expression: 5 + 2 * 3 / 2 - 1?", //10
    answers : [
        {text: "5" , correct: false },
        {text: "8" , correct: false},
        {text: "7" , correct: true},
        {text: "6" , correct: false},
    ]    
 },
 {
    question: " What is the purpose of the #include directive in C?" , //11
    answers : [
        {text: "Define a macro" , correct: false },
        {text: "include file in the program" , correct: true},
        {text: "Declare a variable" , correct: false},
        {text: "Print a output " , correct: false},
    ]      
 },
 {
    question: "  What is the output of printf(%d, 5/2) in C?" , //12
    answers : [
        {text: "2" , correct: false },
        {text: "1" , correct: true},
        {text: "3" , correct: false},
        {text: "2.5 " , correct: false},
    ]      
 },
 {
    question: " What is the scope of a variable declared inside a function in C?" , //13
    answers : [
        {text: " Global" , correct: false },
        {text: "Local" , correct: true},
        {text: "Static" , correct: false},
        {text: "Constant " , correct: false},
    ]
 },
 {
    question: " Which header file is used for input and output operations in C?" , //14
    answers : [
        {text: " stdlib.h" , correct: false },
        {text: "string.h" , correct: false},
        {text: "stdio.h" , correct: true},
        {text: "math.h " , correct: false},
    ]
 },
 {
    question: "  What is the purpose of the strlen function in C?" , //15
    answers : [
        {text: "Find the length of a string" , correct: true },
        {text: "Concatenate two strings" , correct: false},
        {text: " Compare two strings" , correct: false},
        {text: "Convert a string to lowercase " , correct: false},
    ] 
 },
 {
    question: "  Which operator is used to access the address of a variable in C?" , //16
    answers : [
        {text: "*" , correct: false },
        {text: "%" , correct: false},
        {text: "$" , correct: false},
        {text: "&" , correct: true},
    ] 
 },
 {
    question: " Which header file is used for dynamic memory allocation functions in C?" , //17
    answers : [
        {text: "stdlib.h" , correct: true },
        {text: "stdio" , correct: false},
        {text: "string.h" , correct: false},
        {text: "malloc.h" , correct: false},
    ] 
 },
 {
    question: "  Explain the concept of a 'pointer to a function' in C and provide an example of its usage.?" , //18
    answers : [
        {text: "A pointer to a function allows a function to point to another function's code." , correct: false },
        {text: "A pointer to a function is a function that takes a pointer as an argument" , correct: false},
        {text: "A pointer to a function is a variable that stores the memory address of a function" , correct: true},
        {text: "A pointer to a function is a function with dynamic memory allocation." , correct: false},
    ] 
 },
 {
    question: " What is the purpose of a function pointer in C?" , //19
    answers : [
        {text: "It is used to store the memory address of a variable." , correct: false },
        {text: "It is a pointer that can only point to functions." , correct: false},
        {text: " It is a pointer that can point to any data type." , correct: false},
        {text: "It is used to store the memory address of a function." , correct: true},
    ]   
 },
 {
    question: " Which are entry contrl loop in C?" , //20s
    answers : [
        {text: "if-else." , correct: false },
        {text: "for" , correct: true},
        {text: " do-while" , correct: false},
        {text: "only B." , correct: false},
    ] 
 }
];

const questionElement = document.getElementById("question");
const answerButtons = document .getElementById("answer_button");
const  nextButton = document . getElementById("next_btn");

let currentQuestionindex =0;
let score= 0 ;

function startQuiz () {
    currentQuestionindex = 0;
    score = 0;
    nextButton .innerHTML = "Next Question";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex +1;
    questionElement .innerHTML = questionNo + ".  " + currentQuestion. question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}

function resetState() {
    nextButton.style.display="none";
    while(answerButtons.firstChild ) {
        answerButtons.removeChild(answerButtons.firstChild );
    }
}

function selectAnswer (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList .add("correct");
        score++;
   }else {
    selectedBtn.classList.add("incorrect");
   }
   Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct==="true") {
        button.classList.add("correct");
    }
    button.disabled = true;
   });
   nextButton.style.display = "block";
}

 function showScore() {
    resetState();
    questionElement.innerHTML =  'you scored  '+ score +'  out of  ' + questions.length +' !';
    nextButton.innerHTML="Play Again"
    nextButton.style.display = "block";
 }
 function handelNextButton ( ){
    currentQuestionindex++;
    if(currentQuestionindex<questions.length) {  
        showQuestion();
    }else{
        showScore();
    }
 }

nextButton.addEventListener("click", ()=>{
    if(currentQuestionindex<questions.length) {
        handelNextButton();
    }else {
        startQuiz();
    }
});
startQuiz();