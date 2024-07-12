"use client";

// Imports
import {FC} from "react";
import {IAboutExperience} from "@/types/components";
import {offsetFinish, offsetStart} from "@/animations/animations";

// Styling
import styles from "@/styles/components/AboutExperience.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ParagraphMaskAnimation from "@/components/Elements/ParagraphMaskAnimation";

const AboutExperience: FC<IAboutExperience> = ({
	heroTitle,
	paragraph,
	heroImage,
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
					<div className="w-full lg:w-1/2 xl:w-[35%]">
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutExperience;
