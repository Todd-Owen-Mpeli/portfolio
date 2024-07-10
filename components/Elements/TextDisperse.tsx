"use client";

// Imports
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {ITextDisperse} from "@/types/components";
import {disperse} from "@/animations/TextDisperse";

const TextDisperse: FC<ITextDisperse> = ({styles, children}) => {
	const [isAnimated, setIsAnimated] = useState(false);

	const getChars = (element: any) => {
		let characters: any[] = [];

		const word = element.props.children;

		word.split("").forEach((character: any, i: any) => {
			characters.push(
				<motion.span
					custom={i}
					key={character + i}
					variants={disperse}
					animate={isAnimated ? "open" : "closed"}
				>
					{character}
				</motion.span>
			);
		});

		return characters;
	};

	const manageMouseEnter = () => {
		setIsAnimated(true);
	};

	const manageMouseLeave = () => {
		setIsAnimated(false);
	};

	return (
		<div
			className={styles}
			style={{cursor: "pointer"}}
			onMouseEnter={() => {
				manageMouseEnter();
			}}
			onMouseLeave={() => {
				manageMouseLeave();
			}}
		>
			{getChars(children)}
		</div>
	);
};

export default TextDisperse;
