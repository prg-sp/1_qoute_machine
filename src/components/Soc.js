import SocLinkas from './SocLinkas'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Soc = ({ spalva }) => {
	const hrefas = 'https://twitter.com/intent/tweet'
	return (
		<div>
			<SocLinkas
				id="tweet-quote"
				cssClass="myg"
				icon={faCoffee}
				spalva={spalva}
				hrefas={hrefas}
			/>
			<SocLinkas
				cssClass="myg"
				kur="telegramas"
				icon={faQuoteLeft}
				spalva={spalva}
				hrefas="./"
			/>
		</div>
	)
}

export default Soc
