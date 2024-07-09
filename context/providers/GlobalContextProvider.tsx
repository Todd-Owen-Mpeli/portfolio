"use client";

// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {GlobalContext} from "@/context/global";
import {ReactLenis, useLenis} from "lenis/react";
import {IGlobalContextProvider} from "@/types/context";

// Components
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";
import PostHogContextProvider from "@/context/providers/PostHogProviderContext";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<GlobalContext.Provider
			value={{
				mobileLinks: globalProps?.mobileLinks,
				testimonials: globalProps?.testimonials,
				copyrightLinks: globalProps?.copyrightLinks,
				footerMenuLinks: globalProps?.footerMenuLinks,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				themesOptionsContent: globalProps?.themesOptionsContent,
			}}
		>
			{/* Cookie Policy Pop Up */}
			{/* <PostHogContextProvider /> */}
			{/* <ReactLenis root> */}
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				{children}
			</motion.div>
			{/* </ReactLenis> */}
			{/* Vercel Analytics */}
			<Analytics />
			{/* Vercel Speed Insights */}
			<SpeedInsights />
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
