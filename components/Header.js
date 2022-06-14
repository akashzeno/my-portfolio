import { header } from "../data/portfolio.js";
import Navbar from "./Navbar.js";
import styles from "../styles/Header.module.css";

export default function Header() {
	const { homepage, title } = header;

	return (
		<header className={`${styles.header} center`}>
			<h3>
				{homepage ? (
					<a
						href={homepage}
						target="_blank"
						rel="noopener noreferrer"
						className="link"
					>
						{title}
					</a>
				) : (
					title
				)}
			</h3>
			<Navbar />
		</header>
	);
}
