const Myg = ({ cssCla, func, spalva }) => {
	return (
		<div className={cssCla}>
			<button
				style={{ background: spalva }}
				id="new-quote"
				className="myg"
				onClick={func}
			>
				Next
			</button>
		</div>
	);
};

export default Myg;
