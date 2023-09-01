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

export const headerNav = [
	{
		title: 'intro',
		url: '#intro',
	},
	{
		title: 'about',
		url: '#about',
	},
	{
		title: 'skill',
		url: '#skill',
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

export const introText = {
	desc: [
		'안녕하세요. 무한을 그리는 웹 퍼블리셔 김정하입니다.',
		'인상깊은 UI와 견고한 UX를 개발하여 사용자에게 인상깊은 경험과 가치를 제공합니다.',
	],
};

export const aboutText = [
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

export const expTitle = 'Experience';
export const expText = [
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

export const skillText = [
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

export const projectsText = [
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
