import React from "react";
import Navigation from "../Navigation";

const Quiz = (props) => {

    return (
        <div className="quizContainer">
            <>
                <Navigation nh1="About us" nh2="What we offer" nh3="FAQ" />
                <div className="quiz-categoreis">
                    <p>Home / Join us / Take the quiz</p>
                    <div className="qz-button-group">
                        <button>Food</button>
                        <button>Travel</button>
                        <button>Home</button>
                        <button>Shopping</button>
                    </div>

                </div>

                <div class="question-container">
                    <div class="quiz">
                        <h2 id="question"></h2>
                        <div id="answer-buttons">
                            <button class="btn"></button>
                            <button class="btn"></button>
                            <button class="btn"></button>
                            <button class="btn"></button>
                        </div>
                        <button id="next-btn">Next</button>
                    </div>
                </div>
            </>
        </div>

    )
}

// const questions = [

//     {
//         question: 'How would you best describe your diet?',
//         answers: [
//             {text: "Meat in every mean", correct: true},
//             {text: "Meat in some meals", correct: true},
//             {text: "Neat vert rarely", correct: true},
//             {text: "No beef", correct: true},
//             {text: "Vegeterian", correct: true},
//             {text: "Vegan", correct: true},
//         ]
//     }, 
//     {
//         question: 'In a week, how much do you spend on food from restaurants, canteens and takeaways?',
//         answers: [
//             {text: "£0", correct: true},
//             {text: "£1 - £10", correct: true},
//             {text: "£10 - £60", correct: true},
//             {text: "More than £60", correct: true},
//         ] 
//     },
//     {
//         question: 'How much of the food you buy is wasted and thrown away?',
//         answers: [
//             {text: "None", correct: true},
//             {text: "0% - 10%", correct: true},
//             {text: "10 - 30%", correct: true},
//             {text: "More than 30%", correct: true},
//         ] 
//     },
//     {
//         question: 'How often do you buy locally produced food that is not imported to the UK?',
//         answers: [
//             {text: "A lot of the food i buy is locally sourced", correct: true},
//             {text: "Some of the food i buy is locally sourced", correct: true},
//             {text: "I don't care where my food comes from", correct: true},
//         ] 
//     },
//     {
//         question: 'What kind of vehicle do you travel in most often as driver or passenger?',
//         answers: [
//             {text: "Car", correct: true},
//             {text: "Motorbike", correct: true},
//             {text: "Neither - i walk, cycle or use public transport", correct: true},
//         ] 
//     },
//     {
//         question: 'Which of these best describes the vehicle you use most?',
//         answers: [
//             {text: "Electric car", correct: true},
//             {text: "Plug-in Hybrid car", correct: true},
//             {text: "Hybrid car", correct: true},
//             {text: "Small petrol or diesel car", correct: true},
//             {text: "Medium petrol or diesel car", correct: true},
//             {text: "Large petrol or diesel car", correct: true},
//         ] 
//     },
//     {
//         question: 'How many hours a week do you spend on the train for personal use including commuting?',
//         answers: [
//             {text: "I don't travel by train", correct: true},
//             {text: "Under 2 hours", correct: true},
//             {text: "2 to 5 hours", correct: true},
//             {text: "5 to 15 hours", correct: true},
//             {text: "15 to 25 hours", correct: true},
//             {text: "Over 25 hours", correct: true},
//         ] 
//     },
//     {
//         question: 'How many hours a week do you spend on the bus for personal use including commuting?',
//         answers: [
//             {text: "I don't travel by bus", correct: true},
//             {text: "Under 1 hour", correct: true},
//             {text: "1 to 3 hours", correct: true},
//             {text: "3 to 6 hours", correct: true},
//             {text: "6 to 10 hours", correct: true},
//             {text: "Over 10 hours", correct: true},
//         ] 
//     },
//     {
//         question: 'In the last year, what type of flights have you made?',
//         answers: [
//             {text: "Domestic flights", correct: true},
//             {text: "Flights to/ from Europe", correct: true},
//             {text: "Flights to / outside Europe", correct: true},
//         ] 
//     },
//     {
//         question: 'What percentage of your flights do you offset?',
//         answers: [
//             {text: "None of them", correct: true},
//             {text: "25%", correct: true},
//             {text: "50%", correct: true},
//             {text: "75%", correct: true},
//             {text: "All of them", correct: true},
//             {text: "Not applicable", correct: true},
//         ] 
//     },
//     {
//         question: 'What kind of house do you live in?',
//         answers: [
//             {text: "Detached", correct: true},
//             {text: "Semi-detached", correct: true},
//             {text: "Terrace", correct: true},
//             {text: "Flat", correct: true},
//         ] 
//     },
//     {
//         question: 'How many bedrooms does your house have?',
//         answers: [
//             {text: "1", correct: true},
//             {text: "2", correct: true},
//             {text: "3", correct: true},
//             {text: "4 or more", correct: true},
//         ] 
//     },
//     {
//         question: 'How many people, aged 17 and over, live in your house?',
//         answers: [
//             {text: "1", correct: true},
//             {text: "2", correct: true},
//             {text: "3", correct: true},
//             {text: "4", correct: true},
//             {text: "5 or more", correct: true}
//         ] 
//     },
//     {
//         question: 'How do you heat your home?',
//         answers: [
//             {text: "Gas", correct: true},
//             {text: "Oil", correct: true},
//             {text: "Electricity", correct: true},
//             {text: "Wood", correct: true},
//             {text: "Heatpump", correct: true}
//         ] 
//     },
//     {
//         question: 'Is your electricity on a green tariff?',
//         answers: [
//             {text: "Yes 100%", correct: true},
//             {text: "Yes, but the tariff is less than 100%", correct: true},
//             {text: "No", correct: true},
//             {text: "I don't know", correct: true},
//         ] 
//     },
//     {
//         question: 'Do you regularly turn off lights and not leave your appliances on standby?',
//         answers: [
//             {text: "Yes", correct: true},
//             {text: "No", correct: true},
//         ] 
//     },
//     {
//         question: 'How warm do you keep your home in winter',
//         answers: [
//             {text: "Below 14°C", correct: true},
//             {text: "14° - 17°C", correct: true},
//             {text: "18° - 21°C", correct: true},
//             {text: "Over 21°C", correct: true},
//         ] 
//     },
//     {
//         question: 'In a typical month, how much do you spend on clothes and footwear?',
//         answers: [
//             {text: "£0", correct: true},
//             {text: "£1 - £60", correct: true},
//             {text: "£60 - 180", correct: true},
//             {text: "More than £180", correct: true},
//         ] 
//     },
//     {
//         question: 'In a typical month, how much do you spend on your pets?',
//         answers: [
//             {text: "I don't have a pet", correct: true},
//             {text: "£1 - £10", correct: true},
//             {text: "£10 - £35", correct: true},
//             {text: "More than £35", correct: true},
//         ] 
//     },
//     {
//         question: 'In a typical month, how much do you spend on health, beauty and grooming products?',
//         answers: [
//             {text: "£0 - £10", correct: true},
//             {text: "£10 - £60", correct: true},
//             {text: "More than £60", correct: true},
//         ] 
//     },
//     {
//         question: 'In a typical month, how much do you spend on phone, internet and TV contracts?',
//         answers: [
//             {text: "£0", correct: true},
//             {text: "£1 - £35", correct: true},
//             {text: "£35 - £70", correct: true},
//             {text: "More than £70", correct: true},
//         ] 
//     },
//     {
//         question: 'In a typical month, how much do you spend on phone, internet and TV contracts?',
//         answers: [
//             {text: "£0 - £25", correct: true},
//             {text: "£25 - £50", correct: true},
//             {text: "£50 - £75", correct: true},
//             {text: "More than £75", correct: true},
//         ] 
//     }
// ];


// const questionElement = document.getElementById('question')
// const answerButtons = document.getElementById('answer-buttons')
// const nextButton = document.getElementById('next-btn')

// let currentQuestionIndex = 0 ; 
// let score = 0;

//  function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

//  function showQuestion(){

//     resetState()

//     let currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML =  currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add('btn');
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }

//         button.addEventListener("click", selectAnswer);
//     });
// }

//  function resetState(){
//     nextButton.style.display = 'none';
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

//  function selectAnswer(e){
//     const selectedBtn = e.target;
//     const  isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     } else {
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         if(button.dataset.correct === 'true'){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block"
// }

//  function showScore(){
//     resetState();
//     questionElement.innerHTML = `You scored ${score}`;
//     nextButton.innerHTML = "Take Again";
//     nextButton.style.display = "block"
// }

//  function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     } else {
//         showScore();
//     }
// }

// nextButton.addEventListener("click", () =>{

//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     } else {
//         startQuiz();
//     }

// })

// startQuiz()




export default Quiz;



