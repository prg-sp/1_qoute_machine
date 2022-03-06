import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocLinkas = ({ cssClass, id, icon, spalva, hrefas }) => {
	const eleme2 = <FontAwesomeIcon icon={icon} />
	return (
		<div>
			<a
				style={{ background: spalva }}
				id={id}
				rel="noreferrer"
				href={hrefas}
				target="_blank"
				className={cssClass}
			>
				{' '}
				{eleme2}{' '}
			</a>
		</div>
	)
}

export default SocLinkas
