import React, { useState } from 'react';
import { questions } from './data1'; // Import your question data
import '../Quiz/quiz.css'; // Import your CSS as needed
import DarkMode from '../DarkMode';

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedQuizType, setSelectedQuizType] = useState('');
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [quizQuestions, setQuizQuestions] = useState([]); // Use this state for filtered questions
  const [quizBodyVisible, setQuizBodyVisible] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

    // Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Shuffle your questions array
  const shuffledQuestions = shuffleArray(questions);
  
  // Now, `shuffledQuestions` contains your questions in a random order
  
  
    const handleStartQuizClick = () => {
        // Filter questions based on the selected subject and type
        const filteredQuestions = questions.filter(
          (question) =>
            question.quizSubject === selectedSubject &&
            question.quizType === selectedQuizType
        );
    // Limit the number of questions to match the number specified
    const limitedQuestions =
      numberOfItems >= 1 && numberOfItems <= 20
        ? filteredQuestions.slice(0, numberOfItems)
        : [];

    if (limitedQuestions.length > 0) {
      setQuizQuestions(limitedQuestions);
      setQuizBodyVisible(true);
      setCurrentQuestion(0); // Reset the current question index
      setScore(0); // Reset the score
      setShowScore(false); // Hide the score
      setSelectedAnswer(null); // Reset the selected answer
      setIsAnswerCorrect(false); // Reset the correct answer status
    } else {
      // Display a message if no questions match the selected criteria
      alert('No questions match the selected criteria.');
    }
  };
  const handleStartNewQuizClick = () => {
    setSelectedSubject(''); // Reset selected subject
    setSelectedQuizType(''); // Reset selected quiz type
    setNumberOfItems(1); // Reset number of items
    setQuizQuestions([]); // Clear previous quiz questions
    setQuizBodyVisible(false); // Hide quiz body
    setCurrentQuestion(0); // Reset the current question index
    setScore(0); // Reset the score
    setShowScore(false); // Hide the score
  };

  const handleNextQuestion = () => {
    // Move to the next question
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null); // Reset the selected answer
      setIsAnswerCorrect(false); // Reset the correct answer status
    } else {
      setShowScore(true);
    }
  };

  const handleAnswerOptionClick = (isCorrect, answerIndex) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerIndex);
      setIsAnswerCorrect(isCorrect);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  return (
    <div className='quiz'>
      <div className='top-nav'>
        <DarkMode/>
        <div className='form-group'>
          <label for='quiz-subject'>Select Quiz Subject:</label>
          <select
            name='quiz'
            id='quiz-subject'
            onChange={(e) => setSelectedSubject(e.target.value)}
            value={selectedSubject}
          >
            <option value=''>--Please choose an option--</option>
            <option value="Pathology">Pathology</option>
            <option value="Liver">Liver</option>
            <option value="Enzymology">Enzymology</option>
          </select>
        </div>

        <div className='form-group'>
          <label for='quiz-select'>Select Quiz Type:</label>
          <select
            name='quiz'
            id='quiz-select'
            onChange={(e) => setSelectedQuizType(e.target.value)}
            value={selectedQuizType}
          >
            <option value=''>--Please choose an option--</option>
            <option value="multiple-choice">Multiple Choice</option>
            <option value="T/F">True or False</option>
          </select>
        </div>

        <div className='form-group'>
          <label for='Number-of-Items'>Number of Items (1-20):</label>
          <input
            type='number'
            id='Number-of-Items'
            name='Number-of-Items'
            min='1'
            max='20'
            onChange={(e) => setNumberOfItems(parseInt(e.target.value))}
            value={numberOfItems}
          />
        </div>

        <div className='form-btn'>
          <button
            className='quiz-btn'
            type='button'
            onClick={handleStartQuizClick}
          >
            Start Quiz
          </button>
          <button
            className='quiz-btn'
            type='button'
            onClick={handleStartNewQuizClick}
          >
            New Quiz
          </button>
        </div>
      </div>

      {quizBodyVisible && (
  <div className='quiz-body'>
    {showScore ? (
      <div className='score-section'>
        You scored {score} out of {quizQuestions.length}
      </div>
    ) : (
      <>
       <div className='question-section'>
        <div className='question-count'>
          <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
        </div>
        <div className='question-text'>
          {quizQuestions[currentQuestion].questionText}
        </div>
      </div>
      <div className='answer-section'>
  {quizQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
    <div key={index} className="answer-option">
      <button
        onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
        className={`
          ${selectedAnswer === index ? (isAnswerCorrect ? 'correct' : 'incorrect') : ''}
          ${selectedAnswer !== null && !isAnswerCorrect && answerOption.isCorrect ? 'correct' : ''}
        `}
        disabled={selectedAnswer !== null}
      >
        {answerOption.answerText}
      </button>

      {/* Additional code or function calls specific to this answer option */}
      {selectedAnswer !== null && !isAnswerCorrect && answerOption.isCorrect && (
        <span className="correct-answer-text">
          {answerOption.correctAnswerText}
        </span>
        // Add your additional function or code here
      )}
    </div>
  ))}
  <button onClick={handleNextQuestion}>Next</button>
</div>



      </>
    )}
  </div>
)}
  </div>
  )}