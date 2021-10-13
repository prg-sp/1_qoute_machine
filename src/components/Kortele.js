import { useState } from 'react'
import Komentaras from './Komentaras'
import SocMyg from './SocMyg'

const citatos = [
	{
		id: 0,
		tekstas:
			'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
		autorius: 'Anne Fran',
		color: '#73a857',
	},
	{
		id: 1,
		tekstas:
			'Either write something worth reading or do something worth writing.',
		autorius: 'Benjamin Franklin',
		color: '#2c3e50',
	},
	{
		id: 2,
		tekstas: 'Education costs money. But then so does ignorance.',
		autorius: 'Sir Claus Moser',
		color: '#77b1a9',
	},
]

const Kortele = ({ cssClass }) => {
	const [skaicius, setSkaicius] = useState(0)
	const citata = citatos[skaicius].tekstas
	const autorius = citatos[skaicius].autorius
	const spalva = citatos[skaicius].color

	let kunas = document.getElementsByTagName('body')[0]
	kunas.style.background = spalva

	const kitasKvota = () => {
		skaicius < citatos.length - 1 ? setSkaicius(skaicius + 1) : setSkaicius(0)
	}

	return (
		<div style={{ color: spalva }} id="quote-box" className={cssClass}>
			<Komentaras spalva={spalva} cita={citata} auto={autorius} />
			<SocMyg spalva={spalva} cssClass="SocMyg" func={kitasKvota} />
		</div>
	)
}

export default Kortele
