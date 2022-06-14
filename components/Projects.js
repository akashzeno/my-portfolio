import uniqid from "uniqid";
import { projects } from "../data/portfolio.js";
import ProjectContainer from "./ProjectContainer.js";
import styles from "../styles/Projects.module.css";

export default function Projects() {
	if (!projects.length) return null;

	return (
		<section id="projects" className="section projects">
			<h2 className="section__title">Projects</h2>

			<div className={styles.projects__grid}>
				{projects.map((project) => (
					<ProjectContainer key={uniqid()} project={project} />
				))}
			</div>
		</section>
	);
}
