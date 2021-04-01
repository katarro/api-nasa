import React from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
	const nasa = 'https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg';

	return (
		<React.Fragment>
			<a href="/" className="Navbar">
				<img className="pokebola" src={nasa} alt="pokebola" />
			</a>
			
		</React.Fragment>
	);
};
export default Navbar;
