import { useState } from 'react'
import Komentaras from './Komentaras'
import SocMyg from './SocMyg'

const spalvos = [
	'#16a085',
	'#27ae60',
	'#2c3e50',
	'#f39c12',
	'#e74c3c',
	'#9b59b6',
	'#FB6964',
	'#342224',
	'#472E32',
	'#BDBB99',
	'#77B1A9',
	'#73A857',
]

const citatos = [
	{
		id: 0,
		tekstas:
			'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
		autorius: 'Anne Fran',
	},
	{
		id: 1,
		tekstas:
			'Either write something worth reading or do something worth writing.',
		autorius: 'Benjamin Franklin',
	},
	{
		id: 2,
		tekstas: 'Education costs money. But then so does ignorance.',
		autorius: 'Sir Claus Moser',
	},
]

//spalvu kiekis
const colorAmout = spalvos.length
//citatu kiekis
const quoteAmout = citatos.length
//sugeneruoja skaiciu atsitiktini
const randNumGenerator = (x) => {
	return Math.floor(Math.random() * x)
}

const randomQuoteNum = randNumGenerator(quoteAmout)
const randomColorNum = randNumGenerator(colorAmout)

const Kortele = ({ cssClass }) => {
	const [skaicius, setSkaicius] = useState(randomQuoteNum)
	const [spalvaSk, setSpalvaSk] = useState(randomColorNum)

	const citata = citatos[skaicius].tekstas
	const autorius = citatos[skaicius].autorius
	const spalva = spalvos[spalvaSk]

	//changes all page background color
	let kunas = document.getElementsByTagName('body')[0]
	kunas.style.background = spalva

	//after a click of a button changes quote and color of everything
	const kitasKvota = () => {
		//cia kad iseiles eitu citatos buvo kodas
		//skaicius < citatos.length - 1 ? setSkaicius(skaicius + 1) : setSkaicius(0)
		quoteRandom()
		raNum()
	}

	//return random number for quotes
	const quoteRandom = () => {
		let ska3 = randNumGenerator(quoteAmout)

		console.log('dabar citata yra nr: ' + skaicius)

		if (skaicius !== ska3) {
			console.log('citatA neskirtaoja: ' + ska3)
			setSkaicius(ska3)
		} else {
			console.log('citatA kartojasi: isnaujo... ')
			quoteRandom()
		}
	}

	//return random number for colors
	const raNum = () => {
		let skaa = Math.floor(Math.random() * colorAmout)

		console.log('dabar spalvos skaicius yra: ' + spalvaSk)

		if (spalvaSk !== skaa) {
			console.log('spalva nesikartoja: ' + skaa)
			return setSpalvaSk(skaa)
		} else {
			console.log('spalva kartojasi. ISNUAUJO..')
			raNum()
		}
	}

	//ziuriu ar tikrai nesikartoja skaicius
	//console.log('colorAmout: ' + raNum())

	return (
		<div style={{ color: spalva }} id="quote-box" className={cssClass}>
			<Komentaras spalva={spalva} cita={citata} auto={autorius} />
			<SocMyg spalva={spalva} cssClass="SocMyg" func={kitasKvota} />
		</div>
	)
}

export default Kortele
