import { useContext, useState } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../contexts/theme.js";
import { projects, skills, contact } from "../data/portfolio.js";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
	const [{ themeName, toggleTheme }] = useContext(ThemeContext);
	const [showNavList, setShowNavList] = useState(false);

	const toggleNavList = () => setShowNavList(!showNavList);

	return (
		<nav className="center nav">
			<ul
				style={{ display: showNavList ? "flex" : null }}
				className={styles.nav__list}
			>
				{projects.length ? (
					<li className={styles.nav__list_item}>
						<Link
							href="#projects"
							onClick={toggleNavList}
							className="link link__nav"
						>
							Projects
						</Link>
					</li>
				) : null}

				{skills.length ? (
					<li className={styles.nav__list_item}>
						<Link
							href="#skills"
							onClick={toggleNavList}
							className="link link__nav"
						>
							Skills
						</Link>
					</li>
				) : null}

				{contact.email ? (
					<li className={styles.nav__list_item}>
						<Link
							href="#contact"
							onClick={toggleNavList}
							className="link link__nav"
						>
							Contact
						</Link>
					</li>
				) : null}
			</ul>
			{/*
			<button
				type="button"
				onClick={toggleTheme}
				className={`btn btn__icon ${styles.nav__theme}`}
				aria-label="toggle theme"
			>
				{themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
			</button> */}

			<button
				type="button"
				onClick={toggleNavList}
				className={`btn btn__icon ${styles.nav__hamburger}`}
				aria-label="toggle navigation"
			>
				{showNavList ? <CloseIcon /> : <MenuIcon />}
			</button>
		</nav>
	);
}
