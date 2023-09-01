import React, { useEffect, useRef } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { projectsText } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Projects = () => {
	const horizontalRef = useRef(null);
	const sectionsRef = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const horizontal = horizontalRef.current;
		const sections = sectionsRef.current;

		let scrollTween = gsap.to(sections, {
			xPercent: -120 * (sections.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: horizontal,
				start: 'top 56px',
				end: () => '+=' + horizontal.offsetWidth,
				pin: true,
				scrub: 1,
				invalidateOnRefresh: true,
				anticipatePin: 1,
			},
		});

		return () => {
			scrollTween.kill();
		};
	}, []);
	return (
		<section id='projects' ref={horizontalRef}>
			<div className='projects__inner'>
				<h1 className='section-title shape'>My Projects</h1>
				<div className='projects__wrap'>
					{projectsText.map((project, key) => (
						<article
							className={`projects-item p${key + 1}`}
							key={key}
							ref={(el) => (sectionsRef.current[key] = el)}
						>
							<h3 className='projects-item__title'>{project.title}</h3>
							<a
								href={project.view}
								target='_blank'
								className='projects-item__img'
								rel='noreferrer'
							>
								<img src={project.img} alt={project.title} />
							</a>
							<p className='projects-item__desc'>{project.desc}</p>
							<p className='projects-item__tag'>
								{projectsText[key].tag.map((tag, i) => (
									<span key={i}>{tag}</span>
								))}
							</p>
							<a
								href={project.view}
								target='_blank'
								className='projects-item__site'
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
};
export default Projects;
