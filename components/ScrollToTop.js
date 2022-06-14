import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styles from "../styles/ScrollToTop.module.css";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () =>
			window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return isVisible ? (
		<div className={styles.scroll_top}>
			<a href="#top">
				<ArrowUpwardIcon fontSize="large" />
			</a>
		</div>
	) : null;
}
