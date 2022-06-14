import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../data/portfolio.js";
import styles from "../styles/About.module.css";

export default function About() {
	const { name, role, description, resume, social } = about;

	return (
		<div className={`${styles.about} center`}>
			{name && (
				<h1>
					Hi, I Am<br></br>
					<span className={styles.about__name}>{name}.</span>
				</h1>
			)}

			{role && <h2 className={styles.about__role}>A {role}.</h2>}
			<p className={styles.about__desc}>{description && description}</p>

			<div className={`${styles.about__contact} center`}>
				{resume && (
					<a href={resume} target="_blank" rel="noopener noreferrer">
						<span
							type="button"
							className={`btn btn__outline ${styles.btn__outline}`}
						>
							Resume
						</span>
					</a>
				)}

				{social && (
					<>
						{social.github && (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={social.github}
								aria-label="github"
								className={`link link__icon ${styles.link__icon}`}
							>
								<GitHubIcon />
							</a>
						)}

						{social.linkedin && (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={social.linkedin}
								aria-label="linkedin"
								className={`link link__icon ${styles.link__icon}`}
							>
								<LinkedInIcon />
							</a>
						)}
					</>
				)}
			</div>
		</div>
	);
}
