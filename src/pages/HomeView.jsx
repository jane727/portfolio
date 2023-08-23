import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function HomeView() {
	return (
		<>
			<Header />
			<Main>
				<Intro />
				<About />
				<Projects />
				<Contact />
			</Main>
			<Footer />
		</>
	);
}
