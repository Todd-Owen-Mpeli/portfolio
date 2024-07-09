// Components
export type IContactForm = {
	title: string;
	paragraph: string;
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
	displayParagraph: boolean;
};
export type IAboutExperience = {
	heroTitle: string;
	paragraph: string;
	displayAnimation: boolean;
	heroImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IMaskCursorEffectDescription = {
	paragraph: string;
	displayAnimation: boolean;
	hiddenParagraph: string;
	hiddenBackgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};

// Global

// Cards

// Elements
export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type IParagraph = {
	fadeIn: boolean;
	content: string;
	tailwindStyling: string;
};
export type IBackHoverButton = {
	link: string;
};
