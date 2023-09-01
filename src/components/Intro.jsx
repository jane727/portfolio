import React from 'react';
import { ReactComponent as Title } from '../assets/imgs/main_title.svg';

import { CgScrollV } from 'react-icons/cg';
const introText = {
	desc: [
		'안녕하세요. 무한을 그리는 웹 퍼블리셔 김정하입니다.',
		'인상깊은 UI와 견고한 UX를 개발하여 사용자에게 인상깊은 경험과 가치를 제공합니다.',
	],
};

export default function Intro() {
	return (
		<section id='intro'>
			<div className='intro__inner'>
				<div className='intro__text pre'>
					<Title className='title' fill='#2a2934' />
					<p className='desc1'>{introText.desc[0]}</p>
					<p className='desc2'>{introText.desc[1]}</p>
				</div>
				<div className='scroll-down'>
					<span>Scroll Down</span>
					<CgScrollV className='scr' />
				</div>
			</div>
		</section>
	);
}
