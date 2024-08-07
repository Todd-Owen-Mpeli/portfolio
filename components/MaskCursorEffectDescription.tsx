"use client";

// Imports
import {FC, useState} from "react";
import useMousePosition from "@/hooks/useMousePosition";
import {IMaskCursorEffectDescription} from "@/types/components";

// Styling
import styles from "@/styles/components/MaskCursorEffectDescription.module.scss";

// Components
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

	return (
		<>
			<div className={styles.main}>
				<Paragraph
					offsetStart={0.7}
					offsetFinish={0.25}
					content={paragraph}
					fadeIn={displayAnimation}
					tailwindStyling={paragraph ? styles.body : "hidden"}
				/>
				<div
					style={maskStyle}
					className={styles.mask}
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
				>
					<Paragraph
						offsetStart={0.7}
						offsetFinish={0.25}
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
