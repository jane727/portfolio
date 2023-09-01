import React from 'react';

export const Skill = () => (
	<section id='skill'>
		<div className='skill__inner'>
			<ul>
				{skillText.map((skill, key) => (
					<li key={key}>
						<p className='title'>{skill.title}</p>
						<p className='desc'>{skill.desc}</p>
					</li>
				))}
			</ul>
		</div>
	</section>
);

const skillText = [
	{
		title: 'HTML/CSS',
		desc: '탄탄한 마크업과 크로스브라우징을 준수하며 반응형/적응형 웹사이트를 구현할 수 있습니다. svg, 애니메이션을 사용하고 인터렉티브한 웹 개발을 할 수 있습니다.',
	},
	{
		title: 'SCSS',
		desc: '변수 할당, 모듈화를 통해 개발합니다. 믹스인, 상속, 확장등을 사용할 수 있어요. 함수와 다양한 조건문들을 활용할 수 있습니다.',
	},
	{
		title: 'Javascript',
		desc: '기본적인 문법(변수, 연산자, 제어문, 함수, 객체, 클래스 등)에 대해 이해하고 있습니다. Web APIs를 사용한 경험이 있습니다. 바닐라 자바스크립트를 통한 토이프로젝트 개발 경험이 있습니다.',
	},
	{
		title: 'React',
		desc: '리액트의 전반적인 컨셉과 개념에 대해 이해하고 있으며 함수형 컴포넌트 단위의 마크업 개발을 할 수 있습니다. React Hooks, Router 등에 대해 공부하고 있습니다.',
	},
	{
		title: 'Design',
		desc: 'Adobe Photoshop, Illustrator, Figma, XD 등 디자인 툴을 다룰 수 있습니다. 사용자를 고려한 UI,UX 디자인을 개발합니다.',
	},
	{
		title: 'Co-work & Plan',
		desc: '맡은 프로젝트는 충실하게 수행해내려 합니다. 함께하는 동료들과 원활하게 소통하며 성공적인 협업을 위해 노력하며 부족한 분야에 대해 꾸준히 공부중입니다.',
	},
];
