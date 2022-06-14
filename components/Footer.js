import styles from "../styles/Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<a
				href="https://github.com/akashzeno"
				target="_blank"
				className={`link ${styles.footer__link}`}
			>
				Copyright © 2022 Akash Chowdhury
			</a>
		</footer>
	);
}
