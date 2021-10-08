import Soc from './Soc'
import Myg from './Myg'

const SocMyg  = ({func,cssClass, spalva}) => {
	return (
		<div className={cssClass}>
			<Soc spalva={spalva}/>
			<Myg spalva={spalva} cssCla="mygalas" func={func}/>
		</div>
		)
}

export default SocMyg;
