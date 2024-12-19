import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

const QuizScreen = ({ navigation }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (questionId, optionId) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: optionId,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleSubmitQuiz = () => {
    setShowResult(true);
  };

  const quizQuestions = [
    {
      id: 1,
      question: '1. What is the capital of France?',
      options: [
        { id: 1, text: 'London' },
        { id: 2, text: 'Paris' },
        { id: 3, text: 'Berlin' },
        { id: 4, text: 'Rome' },
      ],
      correctOptionId: 2,
    },
    {
      id: 2,
      question: '2. Who painted the Mona Lisa?',
      options: [
        { id: 1, text: 'Leonardo da Vinci' },
        { id: 2, text: 'Pablo Picasso' },
        { id: 3, text: 'Vincent van Gogh' },
        { id: 4, text: 'Michelangelo' },
      ],
      correctOptionId: 1,
    },
    {
        id: 3,
        question: '3. Pakistan Capitl name?',
        options: [
          { id: 1, text: 'Islamabad' },
          { id: 2, text: 'Lahore' },
          { id: 3, text: 'Karchi' },
          { id: 4, text: 'Faisalabad' },
        ],
        correctOptionId: 1,
      },
      {
        id: 4,
        question: '4. Who is the indutrial city of pakistan?',
        options: [
          { id: 1, text: 'Islamabad' },
          { id: 2, text: 'Lahore' },
          { id: 3, text: 'Karchi' },
          { id: 4, text: 'Faisalabad' },
        ],
        correctOptionId: 4,
      },
      {
        id: 5,
        question: '5. Who is the first prime minster of pakistan?',
        options: [
          { id: 1, text: 'Quid e Azam' },
          { id: 2, text: 'Laqat Ali Khan' },
          { id: 3, text: 'Umair Ali Khan' },
          { id: 4, text: 'Allama Iqbal' },
        ],
        correctOptionId: 2,
      },
      {
        id: 6,
        question: '6. Who painted the Mona Lisa?',
        options: [
          { id: 1, text: 'Leonardo da Vinci' },
          { id: 2, text: 'Pablo Picasso' },
          { id: 3, text: 'Vincent van Gogh' },
          { id: 4, text: 'Michelangelo' },
        ],
        correctOptionId: 1,
      },
      {
        id: 7,
        question: '7. Who painted the Mona Lisa?',
        options: [
          { id: 1, text: 'Leonardo da Vinci' },
          { id: 2, text: 'Pablo Picasso' },
          { id: 3, text: 'Vincent van Gogh' },
          { id: 4, text: 'Michelangelo' },
        ],
        correctOptionId: 1,
      },
    // Add more questions...
  ];

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const calculateScore = () => {
    let score = 0;
    for (const question of quizQuestions) {
      if (selectedAnswers[question.id] === question.correctOptionId) {
        score++;
      }
    }
    return score;
  };

  const renderResult = () => {
    const score = calculateScore();
    return (
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Quiz Result:</Text>
        <Text style={styles.scoreText}>
          {score} / {quizQuestions.length}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showResult ? (
        renderResult()
      ) : (
        <>
          <Text style={styles.question}>{currentQuestion.question}</Text>
          {currentQuestion.options.map(option => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.option,
                selectedAnswers[currentQuestion.id] === option.id &&
                  styles.selectedOption,
              ]}
              onPress={() => handleAnswerSelect(currentQuestion.id, option.id)}
            >
              <Text style={styles.optionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}
          {currentQuestionIndex < quizQuestions.length - 1 ? (
            <Button  title="Next Question" onPress={handleNextQuestion} 
            style={styles.button}/>
          ) : (
            <Button title="Submit Quiz" onPress={handleSubmitQuiz} />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  question: {
    fontSize:20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    width: '100%',
    backgroundColor: 'skyblue',
    padding: 15,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333333',
  },
  selectedOption: {
    backgroundColor: 'white',
    borderColor: '#6699ff',
  },
  resultContainer: {
    alignItems: 'center',
    marginTop:30
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    borderRadius:10,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button:{
    borderRadius:10,
  },
});

export default QuizScreen;
