import React,{useState,useEffect} from 'react';
import IntroPage from './IntroPage';
import Questions from './Questions';

//add an onclick event listener to each option and check if its correct...just log to the console "correct"

function App() {
  const [showQuestionsPage,setshowQuestionsPage]=useState(false)
  const [questions,setQuestions]= useState([])
  const [ans,setAns]= useState([])
  const [showText,setText]=useState(false)
  function showQuestionPage(){
      setshowQuestionsPage(true)
      setAns([])
  }
  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&category=21&type=multiple")
    .then(res=>res.json())
    .then(data=>setQuestions(data.results))
    .catch(err=>console.log(err))    
  },[showQuestionsPage])
  
  function checkAnswer(id,is){

      if(id===questions[0].correct_answer && is===1){
          setAns([...ans,1])
      }
    else if(id===questions[1].correct_answer && is===2){
      setAns([...ans,2])
    }
    else if(id===questions[2].correct_answer && is===3){
      setAns([...ans,3])
    }
    else if(id===questions[3].correct_answer && is===4){
      setAns([...ans,4])
    }
    else if(id===questions[4].correct_answer && is===5){
      setAns([...ans,5])
    }
  }

  function got(){
        setText(prev=>!prev)
  }
  function playAgain(){
    setText(prev=>!prev)
    setshowQuestionsPage(!showQuestionsPage)
  }

  return (
    <>
     {!showQuestionsPage&& <IntroPage showQuestionPage={showQuestionPage} />}
      {showQuestionsPage && <Questions ans={ans} showText={showText} got={got} questions={questions} checkAnswer={checkAnswer} 
      showQuestionsPage={showQuestionsPage} setText={setText} playAgain={playAgain}
      />}

    </>
  );
}

export default App;
//create an array of objects while using mod data and map through that array to get the question compinents
//save the array in state and update it with the API data from useEffect hook
