// gitprofile.config.js

const config = {
	github: {
		username: 'L00P3R93', // Your GitHub org/user name. (Required)
		sortBy: 'stars', // stars | updated
		limit: 10, // How many projects to display.
		exclude: {
			forks: false, // Forked projects will not be displayed if set to true.
			projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
		},
	},
	social: {
		linkedin: 'vkioko04',
		twitter: 'S_ntaks',
		mastodon: '',
		facebook: '',
		instagram: '',
		youtube: '', // example: 'pewdiepie'
		dribbble: '',
		behance: '',
		medium: '',
		dev: '',
		stackoverflow: '', // example: '1/jeff-atwood'
		skype: '',
		telegram: '',
		website: 'https://sntaks.com',
		phone: '',
		email: 'vincentkioko51@gmail.com',
	},
	resume: {
		fileUrl:
			'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
	},
	skills: [
		'PHP',
		'Laravel',
		'JavaScript',
		'React.js',
		'Node.js',
		'Nest.js',
		'MySQL',
		'PostgreSQL',
		'Git',
		'Docker',
		'PHPUnit',
		'CSS',
		'Antd',
		'Tailwind',
	],
	experiences: [
		{
			company: 'Sterling Credit Ltd',
			position: 'IT Manager/ Full Stack Developer',
			from: 'August 2020',
			to: 'Present',
			companyLink: 'https://sterlingcredit.co.ke',
		},
		{
			company: 'La Reina Collections',
			position: 'Junior Developer',
			from: 'Sept 2019',
			to: 'March 2020',
			companyLink: 'https://example.com',
		},
	],
	/* certifications: [
		{
			name: 'Lorem ipsum',
			body: 'Lorem ipsum dolor sit amet',
			year: 'March 2022',
			link: 'https://example.com'
		},
	], */
	education: [
		{
			institution: 'Jomo Kenyatta University of Agriculture & Technology',
			degree: 'Degree',
			from: '2015',
			to: '2019',
		},
		{
			institution: 'Kenya Institute of Management',
			degree: 'Diploma',
			from: '2014',
			to: '2018',
		},
	],

	// To hide the `My Projects` section, keep it empty.
	externalProjects: [
		{
			title: 'Project Name',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
			imageUrl: 'https://via.placeholder.com/250x250',
			link: 'https://example.com',
		},
		{
			title: 'Project Name',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
			imageUrl: 'https://via.placeholder.com/250x250',
			link: 'https://example.com',
		},
	],
	// Display blog posts from your medium or dev account. (Optional)
	blog: {
		source: 'dev', // medium | dev
		username: '', // to hide blog section, keep it empty
		limit: 2, // How many posts to display. Max is 10.
	},
	googleAnalytics: {
		id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
	},
	// Track visitor interaction and behavior. https://www.hotjar.com
	hotjar: {
		id: '',
		snippetVersion: 6,
	},
	themeConfig: {
		defaultTheme: 'wireframe',

		// Hides the switch in the navbar
		// Useful if you want to support a single color mode
		disableSwitch: false,

		// Should use the prefers-color-scheme media-query,
		// using user system preferences, instead of the hardcoded defaultTheme
		respectPrefersColorScheme: false,

		// Hide the ring in Profile picture
		hideAvatarRing: false,

		// Available themes. To remove any theme, exclude from here.
		themes: [
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'acid',
			'lemonade',
			'night',
			'coffee',
			'winter',
			'procyon',
		],

		// Custom theme
		customTheme: {
			primary: '#fc055b',
			secondary: '#219aaf',
			accent: '#e8d03a',
			neutral: '#2A2730',
			'base-100': '#E3E3ED',
			'--rounded-box': '3rem',
			'--rounded-btn': '3rem',
		},
	},

	// Optional Footer. Supports plain text or HTML.
	footer: `Made with <a 
			class="text-primary" href="https://github.com/arifszn/gitprofile"
			target="_blank"
			rel="noreferrer"
		>GitProfile</a> and ❤️`,
};

export default config;
