"use client";

// Imports
import Link from "next/link";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {ITextDisperseLink} from "@/types/components";
import {disperse} from "@/animations/TextDisperse";

const TextDisperseLink: FC<ITextDisperseLink> = ({link, styles, children}) => {
	const [isAnimated, setIsAnimated] = useState(false);

	const getCharacters = (element: any) => {
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
		<Link
			className={styles}
			href={`${link?.url}`}
			onMouseEnter={() => {
				manageMouseEnter();
			}}
			onMouseLeave={() => {
				manageMouseLeave();
			}}
			style={{cursor: "pointer"}}
			aria-label={`${link?.title}`}
			target={link?.target ? link?.target : "_self"}
		>
			{getCharacters(children)}
		</Link>
	);
};

export default TextDisperseLink;
