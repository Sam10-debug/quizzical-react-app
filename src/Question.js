

function Question({question,A,B,C,D,lol,comp,}){
	return (
		<section>
			<h3>{question}</h3>
			<div className="answers">
				<div onClick={()=>lol(A,comp)} >{A}</div>
				<div onClick={()=>lol(B,comp)}>{B}</div>
				<div onClick={()=>lol(C,comp)}>{C}</div>
				<div onClick={()=>lol(D,comp)}>{D}</div>
			</div>
		</section>
	)
}

export default Question