import Question from "./Question"

function Questions({questions,checkAnswer,got,ans,showText,playAgain}){
	
	return (
		<section className="question-container">
			<Question question={questions[0].question} 
			A={questions[0].incorrect_answers[0]} B={questions[0].incorrect_answers[1]}
			C={questions[0].correct_answer} D={questions[0].incorrect_answers[2]} lol={checkAnswer}
			comp={1} 
			/>
			<Question question={questions[1].question} 
			A={questions[1].incorrect_answers[1]} B={questions[1].incorrect_answers[0]}
			D={questions[1].correct_answer} C={questions[1].incorrect_answers[2]}
			lol={checkAnswer} comp={2}/>
			<Question question={questions[2].question} 
			B={questions[2].incorrect_answers[0]} A={questions[2].incorrect_answers[1]}
			C={questions[2].correct_answer} D={questions[2].incorrect_answers[2]}
			lol={checkAnswer} comp={3}/>
			<Question question={questions[3].question} 
			A={questions[3].incorrect_answers[0]} B={questions[3].incorrect_answers[1]}
			C={questions[3].correct_answer} D={questions[3].incorrect_answers[2]}
			lol={checkAnswer} comp={4}/>
			<Question question={questions[4].question} 
			A={questions[4].incorrect_answers[0]} B={questions[4].incorrect_answers[1]}
			D={questions[4].correct_answer} C={questions[4].incorrect_answers[2]}
			lol={checkAnswer} comp={5}/>
			<div className="ans">
			{showText&&<h3>You scored {[...new Set(ans)].length}/5 </h3>}
			<div className="checkAnswer" onClick={got} style={{
				display: showText?"none":"flex"
			}} >Check answers</div>
			<div className="playAgain" style={{
				display: !showText?"none":"flex"
			}} onClick={playAgain} >Play again</div>
			</div>
		</section>
	)
}

export default Questions