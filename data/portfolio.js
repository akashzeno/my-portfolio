const header = {
	// all the properties are optional - can be left empty or deleted
	homepage: "https://github.com/akashzeno",
	title: "AKASH.",
};

const about = {
	// all the properties are optional - can be left empty or deleted
	name: "Akash Chowdhury",
	role: "Full-Stack Developer",
	description:
		"I design and build solutions, helping start-ups and tech businesses improve their products. I work closely with clients to articulate their vision. I provide my clients with full-stack web strategy consultancy, including SEO and social media strategy.",
	// resume: "https://example.com",
	social: {
		linkedin: "https://www.linkedin.com/in/akash-chowdhury-dev",
		github: "https://github.com/akashzeno",
	},
};

const projects = [
	{
		name: "Music Player",
		description:
			"A custom UI music player application that plays music of user's choice and a beautiful animation in the background.",
		stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
		sourceCode: "https://github.com/akashzeno/music-player",
		livePreview: "https://music-player-dusky.vercel.app/",
		projectImage: "/images/music-player.png",
	},
	{
		name: "Beatbox App",
		description:
			"A fun drum machine app that plays beats on the key press or click.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/beatbox-app",
		livePreview: "https://beatbox-app-seven.vercel.app/",
		projectImage: "/images/beatbox-app.png",
	},
	{
		name: "BlackJack Game",
		description:
			"A awesome blackjack game that is also optimized for mobile devices.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/blackjack",
		livePreview: "https://blackjack-five.vercel.app/",
		projectImage: "/images/blackjack.png",
	},
	{
		name: "International Space Station Tracker",

		description:
			"A ISS tracker application that show current location of ISS on World Map.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode:
			"https://github.com/akashzeno/international-space-station-tracker-web",
		livePreview: "https://international-space-station-tracker-web.vercel.app/",
		projectImage: "/images/international-space-station-tracker-web.png",
	},
	{
		name: "Monsterbook",
		description:
			"A FaceBook for monsters with search feature using RoboHash API",
		stack: ["NextJS", "React"],
		sourceCode: "https://github.com/akashzeno/monsterbook",
		livePreview: "https://monsterbook.vercel.app/",
		projectImage: "/images/monsterbook.png",
	},
	{
		name: "Custom Blog Website",
		description:
			"A custom blog application with CRUD features and custom Backend to process data.",
		stack: ["HTML", "CSS", "JavaScript", "NodeJS"],
		sourceCode: "https://github.com/akashzeno/blog-website-v",
		livePreview: "https://blog-website-v.vercel.app/",
		projectImage: "/images/blog-website-v.png",
	},
	{
		name: "Math Sprint Game",
		description:
			"A math problem solving game which tracks and records user's time and correct answers.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/math-sprint-game",
		livePreview: "https://math-sprint-game-coral.vercel.app/",
		projectImage: "/images/math-sprint-game.png",
	},
	{
		name: "Kanban Board",
		description:
			"A kanban board application which uses Drag and Drop API and Local Storage of user's browser.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/kanban-board",
		livePreview: "https://kanban-board-beige.vercel.app/",
		projectImage: "/images/kanban-board.png",
	},
	{
		name: "Joke Teller",
		description:
			"A jokes speaking application that uses TexT to Speech API and Jokes API.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/joke-teller",
		livePreview: "https://joke-teller-sigma.vercel.app/",
		projectImage: "/images/joke-teller.png",
	},
	{
		name: "Quotes Generator",
		description:
			"A beautiful application that generates quotes using Quotes API with sharing features.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/quote-generator",
		livePreview: "https://quote-generator-two-pi.vercel.app/",
		projectImage: "/images/quote-generator.png",
	},
	{
		name: "Custom Countdown",
		description:
			"A Countdown Application in which users can set the name and date of the event and it will remember and remind on the set date.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/custom-countdown-app",
		livePreview: "https://custom-countdown-app.vercel.app/",
		projectImage: "/images/custom-countdown-app.png",
	},
	{
		name: "Infinity Scroll",
		description:
			"An Application that Implements the infinity scroll feature which keep on loading Images as the user reaches the end of the page.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/infinity-scroll",
		livePreview: "https://infinity-scroll-ten.vercel.app/",
		projectImage: "/images/infinity-scroll.png",
	},
	{
		name: "Animated Landing Page",
		description: "A animated landing page built using AOS animations.",
		projectImage: "/images/animated-landing-page.png",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/animated-landing-page",
		livePreview: "https://animated-landing-page-pi.vercel.app/",
	},
	{
		name: "Dark Mode",
		description: "A website built to showcase the dark mode feature.",
		projectImage: "/images/dark-mode.png",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/dark-mode",
		livePreview: "https://dark-mode-two.vercel.app/",
	},
	{
		name: "Splash Page",
		description:
			"A splash page with background changing feature made from a design on figma.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/splash-page",
		livePreview: "https://splash-page-seven.vercel.app/",
		projectImage: "/images/splash-page.png",
	},
	{
		name: "NASA Blog",
		description:
			"A custom blog page with Add to favorite feature made using NASA API.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/nasa-api-blog",
		livePreview: "https://nasa-api-blog.vercel.app/",
		projectImage: "/images/nasa-api-blog.png",
	},
	{
		name: "Calculator App",
		description:
			"A beautiful and responsive calculator application with sound feedback on keypress.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/calculator-app",
		livePreview: "https://calculator-app-umber.vercel.app/",
		projectImage: "/images/calculator-app.png",
	},
	{
		name: "Bookmark App",
		description:
			"A lovely bookmarking application that automatically gets icons from links and saves it to local storage of the browser.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/bookmark-app",
		livePreview: "https://bookmark-app-sigma.vercel.app/",
		projectImage: "/images/bookmark-app.png",
	},
	{
		name: "Picture in Picture App",
		description:
			"A application to share screens or windows using Picture-In-Picture Web API",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/picture-in-picture",
		livePreview: "https://picture-in-picture-tau.vercel.app/",
		projectImage: "/images/picture-in-picture.png",
	},
	{
		name: "Paint Clone",
		description: "A custom paint application with minimal UI.",
		projectImage: "/images/paint-clone.png",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/paint-clone",
		livePreview: "https://paint-clone-ivory.vercel.app/",
	},
	{
		name: "Custom Video Player",
		description:
			"A beautiful custom UI video player that plays videos of user's choice.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/video-player",
		livePreview: "https://video-player-blond-gamma.vercel.app/",
		projectImage: "/images/video-player.png",
	},
	{
		name: "Weather App",
		description:
			"A weather application that show temperature and climate using Weather API.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/weather-app",
		livePreview: "https://weather-app-gamma-seven.vercel.app/",
		projectImage: "/images/weather-app.png",
	},
	{
		name: "Text Editor App",
		description: "A sweet and simple custom text editor application.",
		projectImage: "/images/text-editor-app.png",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/text-editor-app",
		livePreview: "https://text-editor-app.vercel.app/",
	},
	{
		name: "Animated Navigation",
		description:
			"A project that implements advance css animations on navigation.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/animated-navigation",
		livePreview: "https://animated-navigation-pi.vercel.app/",
		projectImage: "/images/animated-navigation.png",
	},
	{
		name: "Age In Days",
		description:
			"A fun application that shows user's age in days and then plays 4 different kind of awesome music.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/age-in-days",
		livePreview: "https://age-in-days.vercel.app/",
		projectImage: "/images/age-in-days.png",
	},
	{
		name: "Rock Paper Scissors",
		description:
			"A fun to play, classic rock paper scissors game with css animations.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/rock-paper-scissors",
		livePreview: "https://rock-paper-scissors-lilac-alpha.vercel.app/",
		projectImage: "/images/rock-paper-scissors.png",
	},
	{
		name: "Guess The Number Game",
		description:
			"A simple guess the number game which records the wrong guesses and shows it to the user.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/guess-the-number",
		livePreview: "https://guess-the-number-six.vercel.app/",
		projectImage: "/images/guess-the-number.png",
	},
	{
		name: "Buttons Color Changer",
		description:
			"A application the changes color of the buttons randomly or according to the given options.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/buttons-color-changer",
		livePreview: "https://buttons-color-changer.vercel.app/",
		projectImage: "/images/buttons-color-changer.png",
	},
	{
		name: "Pong Game",
		description:
			"A classic pong game which uses complex game logic and tracks user's score.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/pong-game",
		livePreview: "https://pong-game-rose.vercel.app/",
		projectImage: "/images/pong-game.png",
	},
	{
		name: "Form Validator",
		description:
			"A custom form validator which uses Regex and HTML form validation feature to verify input data.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/form-validator",
		livePreview: "https://form-validator-jet.vercel.app/",
		projectImage: "/images/form-validator.png",
	},
	{
		name: "Spock Rock Game",
		description:
			"A digital implementation of a game made popular by popular series called friends",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/spock-rock-game",
		livePreview: "https://spock-rock-game-nine.vercel.app/",
		projectImage: "/images/spock-rock-game.png",
	},
	{
		name: "Random Image Generator",
		description:
			"A simple application that keeps on generating random image and adds it to the page.",
		stack: ["HTML", "CSS", "JavaScript"],
		sourceCode: "https://github.com/akashzeno/random-image-generator",
		livePreview: "https://random-image-generator.vercel.app/",
		projectImage: "/images/random-image-generator.png",
	},
];
const skills = [
	// skills can be added or removed
	// if there are no skills, Skills section won't show up
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"Python",
	"Web Scraping",
	"NextJS",
	"React",
	"Redux",
	"SCSS",
	"Git",
	"Wordpress",
	"SEO",
	"Graphic Design",
];

const contact = {
	// email is optional - if left empty Contact section won't show up
	email: "akashchowdhury211@gmail.com",
};

export { header, about, projects, skills, contact };
