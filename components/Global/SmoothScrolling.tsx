"use client";

// Imports
import {FC} from "react";
import {ISmoothScrolling} from "@/types/components";
import {ReactLenis} from "@studio-freight/react-lenis";

const SmoothScrolling: FC<ISmoothScrolling> = ({children}) => {
	return (
		// <ReactLenis root>
		<main>{children}</main>
		// </ReactLenis>
	);
};

export default SmoothScrolling;
