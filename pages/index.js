import { useContext } from "react";
import { ThemeContext } from "../contexts/theme.js";
import Header from "../components/Header.js";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Skills from "../components/Skills.js";
import ScrollToTop from "../components/ScrollToTop.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";
import "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
	const [{ themeName }] = useContext(ThemeContext);

	return (
		<div id="top" className={`${themeName} app`}>
			<Head>
				<title>Akash Chowdhury</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Header />

			<main>
				<About />
				<Projects />
				<Skills />
				<Contact />
			</main>

			<ScrollToTop />
			<Footer />
		</div>
	);
}
