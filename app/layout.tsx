// Imports
import type {AppProps} from "next/app";
import {IGlobalProps} from "@/types/context";

// Global Styling
import "@/styles/globals.scss";

// Queries Functions
import {
	getMobileLinks,
	getCopyrightLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "@/graphql/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/graphql/GetAllThemesOptions";
import {getAllTestimonialsContent} from "@/graphql/GetAllTestimonials";

// Components
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import SmoothScrolling from "@/components/Global/SmoothScrolling";
import GlobalContextProvider from "@/context/providers/GlobalContextProvider";
import ApolloContextProvider from "@/context/providers/ApolloContextProvider";

const App = async ({children}: AppProps | any) => {
	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const promises: Promise<any>[] = [
		getMobileLinks(),
		getCopyrightLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getThemesOptionsContent(),
		getAllTestimonialsContent(),
	];

	const [
		mobileLinks,
		copyrightLinks,
		navbarMenuLinks,
		footerMenuLinks,
		themesOptionsContent,
		testimonials,
	] = await Promise.all(promises);

	const globalProps: IGlobalProps = {
		mobileLinks: mobileLinks,
		testimonials: testimonials,
		copyrightLinks: copyrightLinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		themesOptionsContent: themesOptionsContent,
	};

	return (
		<html lang="en">
			<body>
				<ApolloContextProvider>
					<GlobalContextProvider globalProps={globalProps}>
						<SmoothScrolling>
							<Navbar />
							{children}
							<Footer />
						</SmoothScrolling>
					</GlobalContextProvider>
				</ApolloContextProvider>
			</body>
		</html>
	);
};

export default App;
