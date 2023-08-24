import React from 'react';
import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import {
	BiLogoJavascript,
	BiLogoJquery,
	BiLogoPhp,
	BiLogoVuejs,
	BiLogoFigma,
} from 'react-icons/bi';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobexd } from 'react-icons/si';
import { VscLibrary } from 'react-icons/vsc';

const About = () => (
	<section id='about'>
		<div className='about__inner'>
			<div className='about__content'>
				<h2 className='about__title'>About Me</h2>
				<p className='about__desc'>
					<span className='about__desc__subtitle'>To Infinite and Beyond</span>
					<span className='about__desc__pre'>
						안녕하세요! 무한을 그리는 웹 퍼블리셔 김정하입니다. <br />
						재밌는 디자인에서부터 탄탄한 마크업까지 인터렉티브한 WEB개발을 통해 <br />
						사용자에게 인상깊은 경험과 가치를 제공합니다.
					</span>
					<span className='about__desc__pre'>
						어떤 일이든 직접 부딪히며 경험하는 것을 좋아합니다. <br />
						그리고 많은 사람들과 소통하며 정보를 나누고 발전해나가는 것을 좋아해요!
					</span>
				</p>
			</div>
			<div className='about__folder'>
				<h2 className='folder__title'>
					My
					<br />
					Career
				</h2>
				<div className='folder__content'>
					<div className='folder__left'>
						<p className='folder__left__info'>
							<strong>(주)유니드</strong>
							<span>과장 | 2019.06 - 2022.05</span>
						</p>
						<p className='folder__left__desc'>
							디자인, 반응형 웹사이트와 쇼핑몰, 어플리케이션 등을 제작하는 웹 에이전시로 다수의
							공공기관, 기업들과의 프로젝트를 진행하였으며 개발팀원으로 입사하여 개발팀장까지 맡으며
							많은 경험을 쌓을 수 있었습니다.
						</p>
					</div>
					<div className='folder__right'>
						<div className='about__skill'>
							<ul>
								{skillIcons.map((icons, key) => (
									<li key={key}>
										{icons.icon}
										<span>{icons.name}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
export default About;

const skillIcons = [
	{
		icon: <ImHtmlFive />,
		name: 'HTML',
	},
	{
		icon: <ImCss3 />,
		name: 'CSS/SASS',
	},
	{
		icon: <BiLogoJavascript />,
		name: 'Javascript',
	},
	{
		icon: <BiLogoJquery />,
		name: 'JQuery',
	},
	{
		icon: <BiLogoPhp />,
		name: 'PHP',
	},
	{
		icon: <VscLibrary />,
		name: 'GnuBoard',
	},
	{
		icon: <BiLogoVuejs />,
		name: 'Vue',
	},
	{
		icon: <SiAdobephotoshop />,
		name: 'Photoshop',
	},
	{
		icon: <SiAdobeillustrator />,
		name: 'Illustration',
	},
	{
		icon: <BiLogoFigma />,
		name: 'Figma',
	},
	{
		icon: <SiAdobexd />,
		name: 'Adobe XD',
	},
];
