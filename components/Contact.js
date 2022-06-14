import { contact } from "../data/portfolio.js";
import styles from "../styles/Contact.module.css";

export default function Contact() {
	if (!contact.email) return null;

	return (
		<section className={`section ${styles.contact} center`} id="contact">
			<h2 className="section__title">Contact</h2>

			<a href={`mailto:${contact.email}`}>
				<span type="button" className="btn btn__outline">
					Email me
				</span>
			</a>
		</section>
	);
}
