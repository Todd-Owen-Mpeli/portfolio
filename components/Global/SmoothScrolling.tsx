"use client";

// Imports
import Lenis from "lenis";
import {FC, useEffect} from "react";
import {ISmoothScrolling} from "@/types/components";

const SmoothScrolling: FC<ISmoothScrolling> = ({children}) => {
	return (
		// <ReactLenis root>
		<main>{children}</main>
		// </ReactLenis>
	);
};

export default SmoothScrolling;
