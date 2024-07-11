"use client";

// Imports
import Lenis from "lenis";
import {FC, useEffect} from "react";
import {ISmoothScrolling} from "@/types/components";

const SmoothScrolling: FC<ISmoothScrolling> = ({children}) => {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);

			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	return <main>{children}</main>;
};

export default SmoothScrolling;
