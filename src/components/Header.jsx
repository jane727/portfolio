import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/imgs/header_logo.svg';

const headerNav = [
	{
		title: 'intro',
		url: '#intro',
	},
	{
		title: 'about',
		url: '#about',
	},
	{
		title: 'projects',
		url: '#projects',
	},
	{
		title: 'contact',
		url: '#contact',
	},
];
const Header = () => {
	const [show, setShow] = useState(false);
	const toggleMenu = () => {
		setShow((prev) => !prev);
	};
	return (
		<header id='header' role='banner'>
			<div className='header__inner'>
				<div className='header__logo'>
					<a href='/'>
						<Logo className='header__logo__svg' />
					</a>
				</div>
				<nav
					className={`header__nav ${show ? 'show' : ''}`}
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
					className='header__nav__mobile'
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
	);
};

export default Header;
