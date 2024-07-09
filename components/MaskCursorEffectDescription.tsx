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
	hiddenParagraph,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	// Mask Circle size
	const size = isHovered ? 600 : 0;
	const mousePosition = useMousePosition();

	const maskStyle = {
		WebkitMaskSize: `${size}px`,
		maskPosition: `${mousePosition.x}px ${mousePosition.y}px`,
		WebkitMaskPosition: `${
			mousePosition.x ? mousePosition.x - 300 : mousePosition.x
		}px ${mousePosition.y ? mousePosition.y - 300 : mousePosition.y}px`,
	};

	return (
		<>
			<div className={styles.main}>
				<Paragraph
					fadeIn={true}
					content={paragraph}
					tailwindStyling={paragraph ? `${styles.body} block` : "hidden"}
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
						fadeIn={true}
						content={hiddenParagraph}
						tailwindStyling={
							hiddenParagraph ? `${styles.body} block` : "hidden"
						}
					/>
				</div>
			</div>
		</>
	);
};

export default MaskCursorEffectDescription;
