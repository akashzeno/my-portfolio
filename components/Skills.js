import uniqid from "uniqid";
import { skills } from "../data/portfolio.js";
import styles from "../styles/Skills.module.css";

export default function Skills() {
	if (!skills.length) return null;

	return (
		<section className="section skills" id="skills">
			<h2 className="section__title">Skills</h2>
			<ul className={styles.skills__list}>
				{skills.map((skill) => (
					<li
						key={uniqid()}
						className={`${styles.skills__list_item} btn btn__plain`}
					>
						{skill}
					</li>
				))}
			</ul>
		</section>
	);
}
