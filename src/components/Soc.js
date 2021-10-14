import SocLinkas from './SocLinkas'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Soc = ({ spalva }) => {
	const hrefas = 'https://twitter.com/intent/tweet'
	const hrefas2 = 'https://profilaktika1985.github.io/paprastasHtml/'

	return (
		<div className="socMarginas">
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
				hrefas={hrefas2}
			/>
		</div>
	)
}

export default Soc
