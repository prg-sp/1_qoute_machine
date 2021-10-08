
const Myg  = ({cssCla, func, spalva}) => {
	return (
		<div className={cssCla}>
			<button style={{background: spalva}} id="new-quote" className="myg" onClick={func}>Mygalas</button>
		</div>
		)
}

export default Myg;
