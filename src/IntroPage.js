

function IntroPage({showQuestionPage}){
	return(
		<section className="intro-page">
			<h1 className="intro-quiz">QUIZZICAL</h1>
			<p className="description">Sports Quiz</p>
			<button onClick={showQuestionPage}>Start quiz</button>
		</section>
		
		
	)
}

export default IntroPage