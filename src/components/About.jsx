import React from 'react';
import { ReactComponent as SparkleGhost } from '../assets/imgs/sparkleGhost.svg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { aboutText } from '../constants';
import { expTitle } from '../constants';
import { expText } from '../constants';
import { Fade } from 'react-reveal';

const About = () => (
	<section id='about'>
		<div className='about__inner'>
			<Fade delay={1000} duration={2000}>
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
							target='blank'
							className='more'
						>
							<BsFillArrowRightCircleFill />
							<span>자기소개 더보기</span>
						</a>
					</div>
				</div>
			</Fade>
			<Fade delay={1000} duration={2000}>
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
			</Fade>
		</div>
	</section>
);
export default About;
