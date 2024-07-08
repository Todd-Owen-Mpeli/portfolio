"use client";

// Imports
import {FC, useState} from "react";
import {motion} from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
import {fadeInUp, initial} from "@/animations/animations";
import {IMaskCursorEffectDescription} from "@/types/components";

// Styling
import styles from "@/styles/components/MaskCursorEffectDescription.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const MaskCursorEffectDescription: FC<IMaskCursorEffectDescription> = ({
	paragraph,
	hiddenParagraph,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const {x, y} = useMousePosition();

	// Mask Circle size
	const size = isHovered ? 600 : 60;

	console.log(`${x ? x : 1 - size / 2}px ${y ? y : 1 - size / 2}px`);

	return (
		<motion.div
			initial={initial}
			whileInView={fadeInUp}
			viewport={{once: true}}
			className={styles.main}
		>
			<motion.div
				className={styles.mask}
				animate={{
					WebkitMaskPosition: `${x ? x - 300 : 1 - size / 2}px ${
						y ? y - 350 : 1 - size / 2
					}px`,

					WebkitMaskSize: `${size}px`,
				}}
				transition={{type: "tween", ease: "backOut", duration: 0.5}}
			>
				<div
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
					className="flex items-center justify-center"
				>
					<Paragraph
						content={hiddenParagraph}
						tailwindStyling={hiddenParagraph ? `block` : "hidden"}
					/>
				</div>
			</motion.div>

			<Paragraph
				content={paragraph}
				tailwindStyling={paragraph ? `${styles.body} block` : "hidden"}
			/>
		</motion.div>
	);
};

export default MaskCursorEffectDescription;
