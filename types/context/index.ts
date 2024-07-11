export type ISeo = {
	canonical: string;
	cornerstone: Boolean;
	focuskw: string;
	fullHead: string;
	metaDesc: string;
	metaKeywords: string;
	metaRobotsNofollow: string;
	metaRobotsNoindex: string;
	opengraphAuthor: string;
	opengraphDescription: string;
	opengraphImage: {
		mediaItemUrl: string;
	};
	opengraphModifiedTime: string;
	opengraphPublishedTime: string;
	opengraphPublisher: string;
	opengraphSiteName: string;
	opengraphTitle: string;
	opengraphType: string;
	opengraphUrl: string;
	readingTime: number;
	title: string;
	twitterDescription: string;
	twitterTitle: string;
	twitterImage: {
		mediaItemUrl: string;
	};
};
export type IContent = [
	{
		content: any;
	}
];
export type ITestimonials = [
	{
		node: {
			testimonialReview: {
				name: string;
				jobTitle: string;
				paragraph: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type IThemesOptionsContent = {
	address: string;
	textarea: string;
	copyrightText: string;
	email: {
		url: string;
		title: string;
		target: string;
	};
	phoneNumber: {
		url: string;
		title: string;
		target: string;
	};
	linkedinLink: {
		url: string;
		title: string;
		target: string;
	};
	githubLink: {
		url: string;
		title: string;
		target: string;
	};
	resumeDownload: {
		url: string;
		title: string;
		target: string;
	};
	errorPageContent: {
		title: string;
		paragraph: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
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
};

// WEBSITE LINKS AND SUBLINKS TYPES
export namespace ILinks {
	export type INavbarMenuLinks = {
		node: {
			id: string;
			url: string;
			label: string;
		};
	}[];

	export interface IMobileLinks extends INavbarMenuLinks {}
	export interface ICopyrightLinks extends INavbarMenuLinks {}
	export interface IFooterMenuLinks extends INavbarMenuLinks {}
}

/* CONTEXT PROVIDERS  */
export type IPostTypes = {
	pages: string;
	posts: string;
	portfolio: string;
	previewPage: string;
	previewPost: string;
	testimonials: string;
};
export type IPageTypes = {
	home: string;
	portfolio: string;
};
export type IPageContext = {
	content: IContent;
	postTypeFlexibleContent: string;
};
export type IGlobalProps = {
	testimonials: ITestimonials;
	themesOptionsContent: IThemesOptionsContent;

	// Website Links
	mobileLinks: ILinks.IMobileLinks;
	copyrightLinks: ILinks.ICopyrightLinks;
	navbarMenuLinks: ILinks.INavbarMenuLinks;
	footerMenuLinks: ILinks.IFooterMenuLinks;
};
export type IGlobalContext = {
	testimonials: ITestimonials;
	themesOptionsContent: IThemesOptionsContent;

	// Website Links
	mobileLinks: ILinks.IMobileLinks;
	copyrightLinks: ILinks.ICopyrightLinks;
	navbarMenuLinks: ILinks.INavbarMenuLinks;
	footerMenuLinks: ILinks.IFooterMenuLinks;
};
export type IPageContextProvider = {
	content: IContent;
	children: React.ReactNode;
	postTypeFlexibleContent: string;
};
export type IFlexibleContentType = {
	pages: string;
	previewPage: string;
	previewPost: string;
};
export type IGlobalContextProvider = {
	globalProps: IGlobalContext;
	children: React.ReactNode;
};
export type IApolloContextProvider = {
	children: React.ReactNode;
};

type SlugResponse = {
	slug: string;
	modified: string;
};

export interface ISlug extends Array<SlugResponse> {}
