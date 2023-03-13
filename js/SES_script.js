const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const nextSectionElement = document.getElementsByClassName("next-section")[0];
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerOptionsElement = document.getElementById("answer-options");
const assortedInputsElement = document.getElementById("assorted-inputs");
const assortedInputsElementsArray = document.getElementsByClassName("assorted-answer-elements")
const errorMessage = document.getElementById("alert-msg");
let countSelectedAnswers, assortedInputsElementsArrayIndex;
startButton.addEventListener('click', startSurvey) ;
nextButton.addEventListener('click', setNextQuestion) ;
let buttonGridArray = [];  // Each element is of the form {buttonText, answer.ID}. Required only if there are buttons that need a grid layout

let currentQuestionIndex;
let currentSurveySection = "";
let newAnswerID = 0;
const NUMBEROFSKILLLEVELS = 5;

function startSurvey() {
    // alert(test++);
    // startButton.classList.add('hide');
    if (startButton.innerText == "Back") nextButton.innerText = "Next";
    questionContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;
    setFirstQuestion();
}


function setFirstQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}


function setNextQuestion() {
    if (nextButton.innerText == "Finish") {
        // let q = questions;
        return;
    }
    startButton.innerText = "Back";
    if (!updateDatabaseWithSelectedAnswers()) return;
    ++currentQuestionIndex;
    resetState();
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        questionElement.innerText = "Your responses have been recorded. Please proceed to next section."
        nextButton.innerText = "Finish";
        nextSectionElement.classList.remove("hide");
        nextButton.disabled = true;
    }
    
    
}


function resetState() {
    nextButton.classList.remove('hide');
    errorMessage.classList.add("hide");
    while (answerOptionsElement.firstChild) {
        // if (answerOptionsElement.firstChild.id == "assorted-inputs") break;
        // else 
        answerOptionsElement.removeChild(answerOptionsElement.firstChild);
    }
    nextSectionElement.classList.add("hide");
    // Array.from(assortedInputsElementsArray).forEach(assortedElement => {
    //     while (assortedElement.firstChild) {
    //         assortedElement.removeChild(assortedElement.firstChild);
    //     }
    // });
    // assortedInputsElementsArray = [];
    buttonGridArray = [];
    countSelectedAnswers = 0;
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    displayAnswerOptions(question.answers);
    
}



function updateDatabaseWithSelectedAnswers() {
    let isAtLeastOneAnswerSelected = false;
    let answers1 = questions[currentQuestionIndex].answers;
    questions[currentQuestionIndex].answers.forEach(answer => {
        if (answer.selected == true) isAtLeastOneAnswerSelected = true;
        if (answer.type == "button") {
            
        } else if (answer.type == "assorted") {
    
        }
    });
    if (!isAtLeastOneAnswerSelected) {
        
        errorMessage.classList.remove("hide");
        errorMessage.innerText = "No response has been selected. Please select (at least) one response. "
    }
    return isAtLeastOneAnswerSelected;
   
}


function displayAnswerOptions(answerSet) {
    // assortedInputsElementsArrayIndex = 0;
    let answerSerialNumber = 0; //This variable is required only to help button arrays ascertain to which aswer they belong
    let isColumnHeader = false;
    answerSet.forEach(answer => {
        if (answer.id == -2) isColumnHeader = true;
        answer.id = ++newAnswerID; //newAnswerID is a global ID for each possible answer. Each answer (from any question has a unique id)
        if (answer.type == "button") {
            const button  = document.createElement('button');
            button.innerText = answer.text;
            button.dataset = answer;
            button.id = newAnswerID;
            button.setAttribute("type", "button");
            button.classList.add('btn');
            button.classList.add("answer-elements");
            if (answer.text == "+")  {
                button.classList.add("add-more");
                button.addEventListener('click', addMoreOptions);
            } else button.addEventListener('click', selectAnswer);
            answerOptionsElement.appendChild(button);
        }
        else if (answer.type == "assorted") {
            // assortedInputsElementsArrayIndex++;
            let textboxID = 1;
            let newAssortedInputsElement = document.createElement("div");
            newAssortedInputsElement.id = newAnswerID;
            if (answer.id == -1) newAssortedInputsElement.classList.add("answer-elements");

            newAssortedInputsElement.classList.add("assorted-answer-elements");
            newAssortedInputsElement.classList.add("skill-level-grid");
            answer.answerElements.forEach(element => {
                if (element.type == "label") {
                    const label = document.createElement("label");
                    label.innerText = element.text;
                    label.setAttribute("for", "textbox" + textboxID);
                    label.style.fontWeight = "bolder";
                    // if (isColumnHeader) label.classList.add("column-header");
                    newAssortedInputsElement.appendChild(label);
                }
                else if (element.type == "textbox") {
                    const textBox = document.createElement("input");
                    textBox.setAttribute("type", "text");
                    textBox.setAttribute("placeholder", element.text);
                    textBox.setAttribute("id", "textbox" + textboxID);
                    textBox.addEventListener('input', selectAnswer);
                    textBox.style.marginRight = "10px";
                    newAssortedInputsElement.appendChild(textBox);
                    textboxID++;
                }
                else if (element.type == "button") {
                    const button = document.createElement("button");
                    button.innerText = element.text;
                    button.setAttribute("type", "button");
                    button.classList.add('btn');
                    button.classList.add("answer-elements");
                    newAssortedInputsElement.appendChild(button);
                }
                else if (element.type == "button-array") {
                    for (let q = 0; q < element.quantity; q++) {
                        const button = document.createElement("button");
                        button.innerText = q+1;
                        button.setAttribute("type", "button");
                        button.setAttribute("value", answerSerialNumber);
                        button.classList.add('btn');
                        button.classList.add("answer-elements");
                        button.addEventListener('click', selectAnswer);
                        newAssortedInputsElement.appendChild(button);
                    }
                }
            });
            answerOptionsElement.appendChild(newAssortedInputsElement);
        }
        else if (answer.type == "button-grid") {
            const answerText = answer.text;
            buttonGridArray.push({skillName: answerText, id: newAnswerID});
        }
        else if (answer.type == "heading") {
            let newHeadingElement = document.createElement("div");
            newHeadingElement.classList.add("skill-level-grid");
            answer.answerElements.forEach(element => {
                if (element.type == "label") {
                    const label = document.createElement("label");
                    label.innerText = element.text;
                    label.classList.add("column-header");
                    newHeadingElement.appendChild(label);
                }
            });
            answerOptionsElement.appendChild(newHeadingElement);
        }
        answerSerialNumber++;
    });
    if (buttonGridArray.length > 0) {
        let newButtonGridElement = document.createElement("div");
        // newButtonGridElement.classList.add("answer-elements");
        newButtonGridElement.classList.add("btn-grid");
        buttonGridArray.forEach(skillElement => {
            const skillButton = document.createElement("button");
            skillButton.innerText = skillElement.skillName;
            skillButton.setAttribute("type", "button");
            skillButton.classList.add('btn');
            skillButton.classList.add('answer-elements');
            newButtonGridElement.appendChild(skillButton);
            skillButton.addEventListener('click', selectAnswer);
        });
        answerOptionsElement.appendChild(newButtonGridElement);

    }
}



/* function displayAnswerOptions_old(answerSet) {
    answerSet.forEach(answer => {
        if (answer.type == "button") {
            const button  = document.createElement('button');
            button.innerText = answer.text;
            button.dataset = answer;
            // let a = button.dataset.text;
            button.setAttribute("type", "button");
            button.classList.add('btn');
            button.classList.add("answer-elements");
            button.addEventListener('click', selectAnswer);
            answerOptionsElement.appendChild(button);
        }
        else if (answer.type == "assorted") {
            let textboxID = 1;
            answer.answerElements.forEach(element => {
                if (element.type == "label") {
                    const label = document.createElement("label");
                    label.innerText = element.text;
                    label.setAttribute("for", "textbox" + textboxID);
                    assortedInputsElement.appendChild(label);
                }
                else if (element.type == "textbox") {
                    const textBox = document.createElement("input");
                    textBox.setAttribute("type", "text");
                    textBox.setAttribute("placeholder", element.text);
                    textBox.setAttribute("id", "textbox" + textboxID);
                    textBox.addEventListener('input', selectAnswer);
                    assortedInputsElement.appendChild(textBox);
                    textboxID++;
                }
            });
            answerOptionsElement.appendChild(assortedInputsElement);
        }
        else {

        }
                
    });
}
*/

function selectAnswer(e) {
    const selectedAnswer = e.target;
    let currentQuestion = questions[currentQuestionIndex];
    console.log(selectedAnswer.innerText);
    countSelectedAnswers++;
    if (!currentQuestion.isMultiSelection && countSelectedAnswers > 1) deselectAllAnswers();
    if (selectedAnswer.type == "button") {
        selectedAnswer.dataset.selected = !selectedAnswer.dataset.selected;
        for (let q = 0; q < currentQuestion.answers.length; q++) {
            const answer = currentQuestion.answers[q];
            if (selectedAnswer.innerText == answer.text) {
                // answer.selected = !answer.selected;
                answer.selected = true;
                break;
            }
        }
        if (!isNaN(+selectedAnswer.innerText)) {
            selectedAnswer.dataset.selected = true;
            const answerSerial = selectedAnswer.value;
            const answer = currentQuestion.answers[answerSerial];
            answer.selected = true;
            
            const buttonArrayParentElement = selectedAnswer.parentElement;
            const allSiblingElements = selectedAnswer.parentElement.children;
            Array.from(allSiblingElements).forEach(buttonElement => {
                const buttonNumber = +buttonElement.innerText;
                if (buttonNumber < +selectedAnswer.innerText) 
                    buttonElement.classList.add("selected");
                else 
                    buttonElement.classList.remove("selected");
            });
            
        }
        if (selectedAnswer.dataset.selected) {
            selectedAnswer.classList.add("selected");
        } else {
            selectedAnswer.classList.remove("selected");
        }
    } else {
        let elementAffected = selectedAnswer.parentElement;
        let areTextBoxesDirty = false;
        Array.from(elementAffected.children).forEach(element => {
            if (element.type == 'text' && element.value != "") areTextBoxesDirty = true;
        });
        if (areTextBoxesDirty) 
            elementAffected.classList.add("selected");
        else 
            elementAffected.classList.remove("selected");
        let answerSet = questions[currentQuestionIndex].answers;
        for (let q = 0; q < answerSet.length; q++) {
            if (elementAffected.id == answerSet[q].id) {
                answerSet[q].selected = true;
                break;
            }
        }

    }

}

/* function selectAnswer_old(e) {
    const selectedAnswer = e.target;
    console.log(selectedAnswer.innerText);
    let elementAffected;
    if (selectedAnswer.type == "button") {
        elementAffected = selectedAnswer;
    } else {
        elementAffected = selectedAnswer.parentElement;
    }
    elementAffected.selected = !(selectedAnswer.selected);
    if (elementAffected.selected) {
        elementAffected.classList.add("selected");
    } else {
        elementAffected.classList.remove("selected");
    }

}
*/

function addMoreOptions() {
    
}

function deselectAllAnswers() {
    let currentQuestion = questions[currentQuestionIndex];
    let displayedAnswers = Array.from(answerOptionsElement.children);

    //Deselect in the form
    displayedAnswers.forEach(answerOption => {
        answerOption.dataset.selected = false;
        answerOption.classList.remove("selected");
    });

    //Deselect in the database
    for (let q = 0; q < currentQuestion.answers.length; q++) {
        const answer = currentQuestion.answers[q];
        answer.selected = false;
    }
    //reset selected options counter to 1 (to account for the current selection)
    countSelectedAnswers = 1; 
}

const questions = [
    {
        question: "My age group",
        section: "Milestones covered",
        isMultiSelection: false,
        answers: [
            {type: "button", id: -1, text: "Below 15", selected: false},
            {type: "button", id: -1, text: "15 to 21 years", selected: false},
            {type: "button", id: -1, text: "22 to 25 years", selected: false},
            {type: "button", id: -1, text: "26 to 33 years", selected: false},
            {type: "button", id: -1, text: "34 to 40 years", selected: false},
            {type: "button", id: -1, text: "Above 40 years", selected: false}
        ]
    },
    {
        question: "My IT skills",
        section: "Milestones covered",
        isMultiSelection: true,
        answers: [
            {type: "heading", id: -2, selected: false, answerElements: [{type: "label", text: "Area of skill"}, {type: "label", text: "Basic"}, {type: "label", text: "Confident"}, {type: "label", text: "Advanced"}, {type: "label", text: "Experienced"}, {type: "label", text: "Master"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Cybersecurity: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Cloud computing: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Data analytics: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Data Science: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Networking and wireless: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Software development: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "AI and machine learning: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Programming - Python: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Programming - C#: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Programming - Javascript: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Technology - AngularJS: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Web development: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]}
        ]
    },
    {
        question: "My education details",
        section: "Milestones covered",
        isMultiSelection: true,
        answers: [
            {type: "button", id: -1, selected: false, text: "High School Diploma"},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Associate degree in "}, {type: "textbox", text: "stream"}]},
            {type: "button", id: -1, selected: false, text: "Diploma"},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Bachelor's degree in "}, {type: "textbox", text: "stream"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Master's degree in "}, {type: "textbox", text: "stream"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Post-graduate Diploma degree in "}, {type: "textbox", text: "stream"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Professional degree in "}, {type: "textbox", text: "stream"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Doctoral degree in "}, {type: "textbox", text: "stream"}]}
        ]
    },
    {
        question: "My experience details",
        section: "Milestones covered",
        isMultiSelection: true,
        answers: [
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "textbox", text: "Role"}, {type: "textbox", text: "Number of years"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "textbox", text: "Role"}, {type: "textbox", text: "Number of years"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "textbox", text: "Role"}, {type: "textbox", text: "Number of years"}]},
            {type: "button", id: -1, selected: false, text: "+"}
        ]
    },
    {
        question: "My training & certifications",
        section: "Milestones covered",
        isMultiSelection: true,
        answers: [
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "textbox", text: "Certificate name"}, {type: "textbox", text: "Number of years"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "textbox", text: "Certificate name"}, {type: "textbox", text: "Number of years"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "textbox", text: "Certificate name"}, {type: "textbox", text: "Number of years"}]},
            {type: "button", id: -1, selected: false, text: "+"}
        ]
    },
    {
        question: "My business skills",
        section: "Milestones covered",
        isMultiSelection: true,
        answers: [
            {type: "button-grid", id: -1, selected: false, text: "Creativity"},
            {type: "button-grid", id: -1, selected: false, text: "Interpersonal Communication"},
            {type: "button-grid", id: -1, selected: false, text: "Critical Thinking"},
            {type: "button-grid", id: -1, selected: false, text: "Problem Solving"},
            {type: "button-grid", id: -1, selected: false, text: "Public Speaking"},
            {type: "button-grid", id: -1, selected: false, text: "Teamwork"},
            {type: "button-grid", id: -1, selected: false, text: "Sales and Marketing"},
            {type: "button-grid", id: -1, selected: false, text: "Time management"},
            {type: "button-grid", id: -1, selected: false, text: "Analytical"},
            {type: "button-grid", id: -1, selected: false, text: "Strategic planning"},
            {type: "button-grid", id: -1, selected: false, text: "Negotiation"},
            {type: "button-grid", id: -1, selected: false, text: "Delegation"},
            {type: "button-grid", id: -1, selected: false, text: "Leadership"},
            {type: "button-grid", id: -1, selected: false, text: "Technical writing"},
            {type: "button-grid", id: -1, selected: false, text: "Presentation"},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "textbox", text: "Skill"}, {type: "button", text: "+"}]}
        ]
    },
    // {
    //     question: "My soft skills",
    //     section: "Milestones covered",
    //     isMultiSelection: true,
    //     answers: [
    //         {type: "button-grid", id: -1, selected: false, text: "Creativity"},
    //         {type: "button-grid", id: -1, selected: false, text: "Interpersonal Communication"},
    //         {type: "button-grid", id: -1, selected: false, text: "Critical Thinking"},
    //         {type: "button-grid", id: -1, selected: false, text: "Problem Solving"},
    //         {type: "button-grid", id: -1, selected: false, text: "Public Speaking"},
    //         {type: "button-grid", id: -1, selected: false, text: "Teamwork"},
    //         // {type: "button-grid", id: -1, selected: false, answerArray: ["Teamwork", "Teamwork1", "Teamwork2", "TeamworkTeamwork", "Teeeeeeeeeeeamwork"]},
    //         {type: "assorted", id: -1, selected: false, answerElements: [{type: "textbox", text: "Skill"}, {type: "button", text: "+"}]}
    //     ]
    // },
    {
        question: "My IT skills",
        section: "Milestones covered",
        isMultiSelection: true,
        answers: [
            {type: "assorted", id: -2, selected: false, answerElements: [{type: "label", text: "Domain"}, {type: "label", text: "None"}, {type: "label", text: "Basic"}, {type: "label", text: "Confident"}, {type: "label", text: "Advanced"}, {type: "label", text: "Master"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Cybersecurity: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Cloud computing: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Data analytics: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Data Science: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Networking and wireless: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Software development: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "AI and machine learning: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Programming - Python: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Programming - C#: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Programming - Javascript: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Technology - AngularJS: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Web development: "}, {type: "button-array", quantity: NUMBEROFSKILLLEVELS}]}
        ]
    },
    {
        question: "The course levels I am interested in",
        section: "My current plan",
        isMultiSelection: false,
        answers: [
            {type: "button", id: -1, text: "High School Diploma", selected: false},
            {type: "button", id: -1, text: "Associate degree", selected: false},
            {type: "button", id: -1, text: "Diploma", selected: false},
            {type: "button", id: -1, text: "Bachelor's degree", selected: false},
            {type: "button", id: -1, text: "Certificate program", selected: false},
            {type: "button", id: -1, text: "Master's degree", selected: false},
            {type: "button", id: -1, text: "Post-graduate Diploma", selected: false},
            {type: "button", id: -1, text: "Professional degree", selected: false},
            {type: "button", id: -1, text: "Doctoral degree", selected: false},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "Any other "}, {type: "textbox", text: "Course level"}]}
        ]
    },
    {
        question: "Courses  I am interested in",
        section: "My current plan",
        isMultiSelection: false,
        answers: [
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "1st preference:  "}, {type: "textbox", text: "Course name"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "2nd preference: "}, {type: "textbox", text: "Course name"}]},
            {type: "assorted", id: -1, selected: false, answerElements: [{type: "label", text: "3rd preference: "}, {type: "textbox", text: "Course name"}]}
        ]
    }

]



