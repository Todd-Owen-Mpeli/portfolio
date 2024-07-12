"use client";

// Imports
import Image from "next/image";
import {FC, useRef} from "react";
import {IStarProject} from "@/types/components";
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
	const container = useRef(null);
	const {scrollYProgress} = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

	return (
		<>
			<div ref={container} className={styles.container}>
				<h4 className="w-full text-center text-[20vw] lg:leading-[25rem] py-0 font-FormulaCondensedBold uppercase text-white">
					{title}
				</h4>
				<div className={styles.main}>
					<motion.div style={{scale}} className={styles.el}>
						<div className={styles.imageContainer}>
							<div className="bg-white h-full w-full">
								{/* <Image
									alt={image?.altText}
									src={image?.sourceUrl}
									width={
										image?.mediaDetails?.width
											? image?.mediaDetails?.width
											: 1000
									}
									height={
										image?.mediaDetails?.height
											? image?.mediaDetails?.height
											: 1000
									}
								/> */}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default StarProject;
