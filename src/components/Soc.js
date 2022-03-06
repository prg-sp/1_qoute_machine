import SocLinkas from './SocLinkas';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Soc = ({ spalva }) => {
	// const hrefas = 'https://github.com/prg-sp';
	const hrefas2 = 'mailto:wdev.prg.sp@gmail.com';

	return (
		<div>
			<SocLinkas
				cssClass="myg"
				kur="telegramas"
				icon={faEnvelope}
				spalva={spalva}
				hrefas={hrefas2}
			/>
		</div>
	);
};

export default Soc;
