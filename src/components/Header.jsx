import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/imgs/logo_new.svg';
import { headerNav } from '../constants';
import { Fade } from 'react-reveal';

const Header = () => {
	const [show, setShow] = useState(false);
	const toggleMenu = () => {
		setShow((prev) => !prev);
	};
	return (
		<Fade top>
			<header id='header' role='banner'>
				<div className='header__inner'>
					<a href='/' className='header__logo'>
						<Logo className='logo-svg' />
					</a>
					<nav
						id='navigation'
						className={`nav ${show ? 'show' : ''}`}
						role='navigation'
						aria-label='메인 메뉴'
					>
						<ul>
							{headerNav.map((nav, key) => (
								<li key={key}>
									<a href={nav.url}>{nav.title}</a>
								</li>
							))}
						</ul>
					</nav>
					<div
						className='nav__toggle-btn'
						id='headerToggle'
						aria-controls='primary-menu'
						aria-expanded={show ? 'true' : 'false'}
						role='button'
						tabIndex='0'
						onClick={toggleMenu}
					>
						<span></span>
					</div>
				</div>
			</header>
		</Fade>
	);
};

export default Header;
