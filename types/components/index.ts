// Components
export type IHero = {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IContactForm = {
	title: string;
	paragraph: string;
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
	displayParagraph: boolean;
};

// Global

// Cards

// Elements
export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type IParagraph = {
	content: string;
	tailwindStyling: string;
};
export type IBackHoverButton = {
	link: string;
};
