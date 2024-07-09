// Imports
import Image from "next/image";
import {FC, useRef} from "react";
import {IAboutExperience} from "@/types/components";
import {motion, useScroll, useTransform} from "framer-motion";

// Styling
import styles from "@/styles/components/AboutExperience.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const AboutExperience: FC<IAboutExperience> = ({
	heroTitle,
	paragraph,
	heroImage,
	displayAnimation,
}) => {
	const container = useRef(null);

	const {scrollYProgress} = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

	return (
		<>
			<div ref={container} className="h-[300vh] relative bg-black">
				<div
					className={styles.sticky + " sticky overflow-hidden top-0 h-screen"}
				>
					<motion.div style={{scale}} className={styles.el}>
						<div className={styles.imageContainer}>
							<Image fill alt={heroImage?.altText} src={heroImage?.sourceUrl} />
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default AboutExperience;
