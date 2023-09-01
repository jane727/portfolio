import React from 'react';
import { ReactComponent as SparkleGhost } from '../assets/imgs/sparkleGhost.svg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const About = () => (
	<section id='about'>
		<div className='about__inner'>
			<div className='about__top'>
				<div className='about__ghost'>
					<SparkleGhost fill='#0c142f' stroke='#0c142f' width='100%' />
				</div>
				<div className='about__text'>
					<p className='title'>{aboutText[0].title}</p>
					<p className='desc pre'>
						{aboutText[0].desc[0]} <br />
						{aboutText[0].desc[1]} <br />
						{aboutText[0].desc[2]} <br />
						{aboutText[0].desc[3]} <br />
						{aboutText[0].desc[4]}
					</p>
					<a
						href='https://janedev.notion.site/janedev/db6eaaa8acf34149a46576eba23f88dc'
						target='_blank'
						className='more'
					>
						<BsFillArrowRightCircleFill />
						<span>자기소개 더보기</span>
					</a>
				</div>
			</div>
			<div className='about__exp'>
				<h2 className='section-title clover'>{expTitle}</h2>
				<div className='about__content'>
					<ul>
						{expText.map((exp, key) => (
							<li key={key}>
								<p className='title'>{exp.title}</p>
								<p className='text'>{exp.text}</p>
								<p className='date'>{exp.date}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	</section>
);
export default About;

const aboutText = [
	{
		title: 'I am a Web Publisher!',
		desc: [
			'안녕하세요! 무한을 그리는 웹 퍼블리셔 김정하입니다.',
			'저는 무엇이든 직접 경험해보고 실현해보는 것을 좋아합니다.',
			'여러 개발 기술들을 꾸준히 공부중이에요!',
			'다양한 분야의 사람들과 커뮤니케이션을 원활하게 해요.',
			'또, 맡은 일은 끝까지 책임지고 최선을 다해요.',
		],
	},
	{
		title: '(주)유니드',
		text: '과장 | 2019.06 - 2022.05',
		desc: '디자인, 반응형 웹사이트와 쇼핑몰, 어플리케이션 등을 제작하는 웹 에이전시로 다수의	공공기관, 기업들과의 프로젝트를 진행하였으며 개발팀원으로 입사하여 개발팀장까지 맡으며 많은 경험을 쌓을 수 있었습니다.',
	},
];

const expTitle = 'Experience';
const expText = [
	{
		title: '그린컴퓨터아카데미',
		text: '디지털컨버전스(UI/UX엔지니어링) 프론트엔드 개발자과정',
		date: '2018.10 ~ 2019.03',
	},
	{
		title: '(주)유니드',
		text: '개발팀 | 사원 - 과장',
		date: '2019.06 ~ 2022.05',
	},
	{
		title: 'To be continued...',
		text: '-',
		date: 'now',
	},
];
