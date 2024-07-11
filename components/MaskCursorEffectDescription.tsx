"use client";

// Imports
import {useScroll} from "framer-motion";
import {FC, useRef, useState} from "react";
import useMousePosition from "@/hooks/useMousePosition";
import {IMaskCursorEffectDescription} from "@/types/components";

// Styling
import styles from "@/styles/components/MaskCursorEffectDescription.module.scss";

// Components
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Paragraph from "@/components/Elements/Paragraph";

const MaskCursorEffectDescription: FC<IMaskCursorEffectDescription> = ({
	paragraph,
	displayAnimation,
	hiddenParagraph,
	hiddenBackgroundImage,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	// Mask Circle size
	const size = isHovered ? 600 : 0;
	const mousePosition = useMousePosition();

	const maskStyle = {
		WebkitMaskSize: `${size}px`,
		backgroundImage: `linear-gradient(
				0deg,rgba(0, 0, 0, 0.25),
				rgba(0, 0, 0, 0.25)),
				url(${hiddenBackgroundImage?.sourceUrl})`,
		maskPosition: `${mousePosition.x}px ${mousePosition.y}px`,
		WebkitMaskPosition: `${
			mousePosition.x ? mousePosition.x - 300 : mousePosition.x
		}px ${mousePosition.y ? mousePosition.y - 300 : mousePosition.y}px`,
	};

	const container: any = useRef();

	const {scrollYProgress} = useScroll({
		target: container,

		offset: ["start start", "end end"],
	});

	return (
		<>
			<div ref={container} className="relative h-[200vh]">
				<Section1
					image={hiddenBackgroundImage}
					scrollYProgress={scrollYProgress}
				/>
				<Section2
					image={hiddenBackgroundImage}
					scrollYProgress={scrollYProgress}
				/>
			</div>
			<div className={styles.main}>
				<Paragraph
					fadeIn={displayAnimation}
					content={paragraph}
					tailwindStyling={paragraph ? styles.body : "hidden"}
				/>
				<div
					className={styles.mask}
					style={maskStyle}
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
				>
					<Paragraph
						fadeIn={displayAnimation}
						content={hiddenParagraph}
						tailwindStyling={hiddenParagraph ? styles.body : "hidden"}
					/>
				</div>
			</div>
		</>
	);
};

export default MaskCursorEffectDescription;
