import React from 'react';
import { Fade } from 'react-reveal';

const Contact = () => (
	<Fade delay={1000}>
		<section id='contact'>
			<div className='contact__inner'>
				<h1 className='section-title star'>Contact</h1>
				<p className='contact__desc'>
					다양한 제안을 기다리고 있습니다!
					<br />
					아래 주소로 메일을 보내주시면 1-2일내에 답변해드릴게요 :D
				</p>
				<ul className='contact__content'>
					<li>
						<p className='info__title'>e-mail</p>
						<p className='info__text'>
							<a href='mailto:bykim125@gmail.com'>janedev27@gmail.com</a>
						</p>
					</li>
					<li>
						<p className='info__title'>github</p>
						<p className='info__text'>
							<a href='https://github.com/jane727' target='blank'>
								https://github.com/jane727
							</a>
						</p>
					</li>
					<li>
						<p className='info__title'>phone</p>
						<p className='info__text'>010.4110.6412</p>
					</li>
				</ul>
			</div>
		</section>
	</Fade>
);

export default Contact;
