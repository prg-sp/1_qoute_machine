import MiniAutorius from './MiniAutorius'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const eleme = <FontAwesomeIcon icon={faQuoteLeft} />
const Komentaras = ({ cita, auto }) => {
	return (
		<div id="text">
			<h1>
				<span id="spanas">{eleme}</span> {cita}
			</h1>
			<MiniAutorius auto={auto} />
		</div>
	)
}

export default Komentaras
