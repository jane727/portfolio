import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { ReactComponent as Ghost } from '../assets/imgs/ghost.svg';

const introText = {
	title: 'Welcome to my portfolio',
	desc: ['To Infinite', 'and beyond !', 'Take a look at my works.'],
};

export default function Intro() {
	return (
		<section id='intro'>
			<div className='intro__inner'>
				<div className='intro__folder'>
					<span className='intro__folder__subtitle'>{introText.title}</span>
					<span className='intro__folder__title'>
						{introText.desc[0]}
						<br />
						{introText.desc[1]}
					</span>
					<div className='intro__folder__bottom'>
						<span>{introText.desc[2]}</span>
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
