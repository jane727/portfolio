import React from 'react';
import { ReactComponent as Title } from '../assets/imgs/main_title.svg';
import { CgScrollV } from 'react-icons/cg';
import { introText } from '../constants';
import Fade from 'react-reveal/Fade';

export default function Intro() {
	return (
		<section id='intro'>
			<div className='intro__inner'>
				<Fade delay={1000} duration={2000}>
					<div className='intro__text pre'>
						<Title className='title' fill='#2a2934' />
						<p className='desc1'>{introText.desc[0]}</p>
						<p className='desc2'>{introText.desc[1]}</p>
					</div>
				</Fade>
				<Fade delay={2000}>
					<div className='scroll-down'>
						<span>Scroll Down</span>
						<CgScrollV className='scr' />
					</div>
				</Fade>
			</div>
		</section>
	);
}
