import React from 'react';
import { skillText } from '../constants';
import { Slide } from 'react-reveal';

export const Skill = () => (
	<section id='skill'>
		<div className='skill__inner'>
			<ul>
				<Slide top duration={2000}>
					{skillText.map((skill, key) => (
						<li key={key}>
							<p className='title'>{skill.title}</p>
							<p className='desc'>{skill.desc}</p>
						</li>
					))}
				</Slide>
			</ul>
		</div>
	</section>
);
