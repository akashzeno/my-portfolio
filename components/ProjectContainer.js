import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import styles from "../styles/ProjectContainer.module.css";
import Image from "next/image";

export default function ProjectContainer({ project }) {
	return (
		<div className={styles.project}>
			<Image
				className={styles.appImg}
				src={project.projectImage}
				alt="App Image"
				width={1280}
				height={800}
			></Image>
			<h3 className={styles.projectName}>{project.name}</h3>
			<p className={styles.project__description}>{project.description}</p>
			{project.stack && (
				<ul className={styles.project__stack}>
					{project.stack.map((item) => (
						<li key={uniqid()} className={styles.project__stack_item}>
							{item}
						</li>
					))}
				</ul>
			)}

			{project.sourceCode && (
				<a
					href={project.sourceCode}
					target="_blank"
					aria-label="source code"
					className={`link link__icon ${styles.link__icon}`}
				>
					<GitHubIcon />
				</a>
			)}

			{project.livePreview && (
				<a
					href={project.livePreview}
					target="_blank"
					aria-label="live preview"
					className={`link link__icon ${styles.link__icon}`}
				>
					<LaunchIcon />
				</a>
			)}
		</div>
	);
}
