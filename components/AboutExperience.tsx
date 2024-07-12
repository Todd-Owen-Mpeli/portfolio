"use client";

// Imports
import {
	offsetStart,
	offsetFinish,
	slideInRightInitial,
	slideInRightFinish,
} from "@/animations/animations";
import {FC} from "react";
import {motion} from "framer-motion";
import {IAboutExperience} from "@/types/components";

// Styling
import styles from "@/styles/components/AboutExperience.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ParagraphMaskAnimation from "@/components/Elements/ParagraphMaskAnimation";

const AboutExperience: FC<IAboutExperience> = ({
	paragraph,
	paragraphTwo,
	displayAnimation,
}) => {
	return (
		<div className={styles.description}>
			<div className="bg-white px-6 py-44">
				<div className="max-w-full lg:max-w-6xl mx-auto p-0 flex flex-col lg:flex-row justify-between gap-6 lg:gap-16">
					<div className="w-full lg:w-1/2 xl:w-[65%]">
						<ParagraphMaskAnimation
							content={paragraph}
							offsetStart={offsetStart}
							offsetFinish={offsetFinish}
							fadeIn={displayAnimation}
							tailwindStyling={
								paragraph
									? "overflow-hidden text-black text-left text-4xl lg:text-6xl leading-tight font-PlusJakartaSans"
									: "hidden"
							}
						/>
					</div>
					<motion.div
						viewport={{once: false}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className="w-full lg:w-1/2 xl:w-[35%]"
					>
						<h4 className="mb-4 text-xl text-left text-secondary-two">About</h4>
						<Paragraph
							content={paragraphTwo}
							offsetStart={offsetStart}
							offsetFinish={offsetFinish}
							fadeIn={displayAnimation}
							tailwindStyling={
								paragraphTwo
									? "text-black text-left text-lg max-w-sm font-PlusJakartaSans"
									: "hidden"
							}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default AboutExperience;
