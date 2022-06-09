import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
	return (
		<header className='Header'>
			<h1>{title}</h1>
			<Button color='green' text='Add'/>
		</header>
	)
}
Header.defaultProps = {
	title: 'Hello world',
}

Header.propTypes = {
	title: PropTypes.string,
}

export default Header