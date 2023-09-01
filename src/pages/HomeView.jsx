import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import About from '../components/About';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import { Skill } from '../components/Skill';
import Projects from '../components/Projects';

export default function HomeView() {
	return (
		<>
			<Header />
			<Main>
				<Intro />
				<About />
				<Skill />
				<Projects />
				<Contact />
			</Main>
			<Footer />
		</>
	);
}
