import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import projects01 from '../assets/imgs/projects/bigsspringtree.jpg';
import projects02 from '../assets/imgs/projects/gnstartup.jpg';
import projects03 from '../assets/imgs/projects/gnam6.jpg';
import projects04 from '../assets/imgs/projects/gcaf.jpg';
import projects05 from '../assets/imgs/projects/gaecheon2022.jpg';
import projects06 from '../assets/imgs/projects/yonam_univ.jpg';
import projects07 from '../assets/imgs/projects/klc.jpg';
import projects08 from '../assets/imgs/projects/mirae.jpg';
import projects09 from '../assets/imgs/projects/svcarwash.jpg';
import projects10 from '../assets/imgs/projects/kicet.jpg';
import projects11 from '../assets/imgs/projects/jellygame.jpg';
import projects12 from '../assets/imgs/projects/task.jpg';

const Projects = () => (
	<section id='projects'>
		<div className='projects__inner'>
			<h1 className='projects__title'>
				My
				<br />
				Projects
			</h1>
			<div className='projects__wrap'>
				{projectsText.map((project, key) => (
					<article className={`projects__item p${key + 1}`} key={key}>
						<h3 className='projects__item__title'>{project.title}</h3>
						<a href={project.view} target='_blank' className='projects__item__img' rel='noreferrer'>
							<img src={project.img} alt={project.title} />
						</a>
						<p className='projects__item__desc'>{project.desc}</p>
						<p className='projects__item__tag'>
							{projectsText[key].tag.map((tag, i) => (
								<span>{tag}</span>
							))}
						</p>
						<a
							href={project.view}
							target='_blank'
							className='projects__item__site'
							rel='noreferrer'
						>
							View <BsArrowUpRight />
						</a>
					</article>
				))}
			</div>
		</div>
	</section>
);

export default Projects;

const projectsText = [
	{
		title: '빅스스프링트리',
		desc: 'HTML, CSS, Javascript, GSAP, 그누보드 라이브러리를 사용하여 인터렉티브한 반응형 웹사이트를 구축하였습니다.',
		img: projects01,
		view: 'http://www.bigsspringtree.com/',
		tag: ['HTML', 'CSS', 'JS', 'GnuBoard'],
	},
	{
		title: '경남창업포털',
		desc: 'Vue를 사용하여 다양한 정보를 제공하는 반응형 웹사이트를 구축하였습니다.',
		img: projects02,
		view: 'https://www.gnstartup.kr/',
		tag: ['Vue'],
	},
	{
		title: '경남6차산업지원센터',
		desc: 'HTML, CSS, PHP, JS를 사용하여 반응형 웹사이트를 구축하였습니다.',
		img: projects03,
		view: 'http://www.xn--6-v85ew7hc2v44fiuk.com/',
		tag: ['HTML', 'CSS', 'JS', 'PHP'],
	},
	{
		title: '경남문화예술진흥원',
		desc: 'HTML, CSS, Javascript, 그누보드 라이브러리를 사용하여 반응형 웹사이트를 구축하였습니다.',
		img: projects04,
		view: 'https://gcaf.or.kr/',
		tag: ['HTML', 'CSS', 'JS', 'GnuBoard'],
	},
	{
		title: '개천예술제',
		desc: 'HTML, CSS, Javascript, 그누보드 라이브러리를 사용하여 반응형 웹사이트를 구축하였습니다.',
		img: projects05,
		view: 'http://www.gaecheonart.com/',
		tag: ['HTML', 'CSS', 'JS', 'GnuBoard'],
	},
	{
		title: '연암공과대학교',
		desc: 'HTML, CSS, Javascript를 사용하여 반응형 웹사이트를 구축하였습니다.',
		img: projects06,
		view: 'https://www.yc.ac.kr/',
		tag: ['HTML', 'CSS', 'JS'],
	},
	{
		title: '한국승강기대학교',
		desc: 'HTML, CSS, Javascript를 사용하여 반응형 웹사이트를 구축하였습니다.',
		img: projects07,
		view: 'https://www.klc.ac.kr/',
		tag: ['HTML', 'CSS', 'JS'],
	},
	{
		title: '미래항공',
		desc: 'HTML, CSS, Javascript, 그누보드 라이브러리를 사용하여 반응형 웹사이트를 구축하였습니다.',
		img: projects08,
		view: 'http://www.miraeaero.com/',
		tag: ['HTML', 'CSS', 'JS', 'GnuBoard'],
	},
	{
		title: 'SV회오리세차',
		desc: 'HTML, CSS, Javascript, PHP를 사용하여 반응형 웹사이트를 구축하였습니다.',
		img: projects09,
		view: 'https://svcarwash.co.kr/main/index',
		tag: ['HTML', 'CSS', 'JS', 'PHP'],
	},
	{
		title: '한국세라믹기술원',
		desc: 'Unity, Blender, AfterEffect를 사용하여 키오스크 안내 프로그램을 제작하였습니다.',
		img: projects10,
		view: 'https://dour-concrete-a78.notion.site/8defa0ff67c64235932a5eb3a638fd16',
		tag: ['Unity', 'Blender', 'AE'],
	},
	{
		title: '젤리를 찾아라!',
		desc: '개인작업물로 HTML, CSS, Javascript를 사용하여 젤리 찾기 게임을 제작하였습니다.',
		img: projects11,
		view: 'https://jane727.github.io/jellygame/',
		tag: ['HTML', 'CSS', 'JS'],
	},
	{
		title: 'Task 일정 관리',
		desc: '개인작업물로 HTML, CSS, Javascript를 사용하여 일정관리 어플리케이션을 제작하였습니다.',
		img: projects12,
		view: 'https://jane727.github.io/task/',
		tag: ['HTML', 'CSS', 'JS'],
	},
];
