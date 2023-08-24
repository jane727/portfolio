import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { ReactComponent as Ghost } from '../assets/imgs/ghost.svg';

export default function Intro() {
	return (
		<section id='intro'>
			<div className='intro__inner'>
				<div className='intro__folder'>
					<span className='intro__folder__subtitle'>Welcome to my portfolio</span>
					<span className='intro__folder__title'>
						To Infinite
						<br />
						and beyond !
					</span>
					<div className='intro__folder__bottom'>
						<span>Take a look at my works.</span>
						<a href='#projects'>
							view <BsArrowUpRight />
						</a>
					</div>
				</div>
				<div className='intro__ghost'>
					<Ghost />
				</div>
			</div>
		</section>
	);
}
