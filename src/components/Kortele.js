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

const skai = spalvos.length
const randomNumber = Math.floor(Math.random() * skai)

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

const Kortele = ({ cssClass }) => {
	const [skaicius, setSkaicius] = useState(0)
	const [spalvaSk, setSpalvaSk] = useState(randomNumber)

	const citata = citatos[skaicius].tekstas
	const autorius = citatos[skaicius].autorius
	const spalva = spalvos[spalvaSk]

	//changes all page background color
	let kunas = document.getElementsByTagName('body')[0]
	kunas.style.background = spalva

	//after a click of a button changes quote and color of everything
	const kitasKvota = () => {
		skaicius < citatos.length - 1 ? setSkaicius(skaicius + 1) : setSkaicius(0)
		setSpalvaSk(raNum())
	}

	//return random number
	const raNum = () => {
		let skaa = Math.floor(Math.random() * skai)
		console.log(skaa)
		if (skaa !== spalvaSk) {
			console.log('nesikartoja')
			return skaa
		} else {
			console.log('kartojasi')
			return skaa + Math.floor(Math.random() * skai)
		}
	}
	console.log('skai: ' + raNum())

	return (
		<div style={{ color: spalva }} id="quote-box" className={cssClass}>
			<Komentaras spalva={spalva} cita={citata} auto={autorius} />
			<SocMyg spalva={spalva} cssClass="SocMyg" func={kitasKvota} />
		</div>
	)
}

export default Kortele
