"use client";

// Imports
import Image from "next/image";
import {FC, useRef} from "react";
import {IStarProject} from "@/types/components";
import {
	fadeInUp,
	initialThree,
	offsetFinish,
	offsetStart,
} from "@/animations/animations";
import {motion, useScroll, useTransform} from "framer-motion";

// Styling
import styles from "@/styles/components/StarProject.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const StarProject: FC<IStarProject> = ({
	image,
	title,
	paragraph,
	paragraphTwo,
	displayAnimation,
}) => {
	return (
		<>
			<div className={styles.container}></div>
		</>
	);
};

export default StarProject;
