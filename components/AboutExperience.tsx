"use client";

// Imports
import {
	offsetStart,
	offsetFinish,
	slideInRightInitial,
	slideInRightFinish,
	initialTwo,
	fadeIn,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IAboutExperience} from "@/types/components";

// Styling
import styles from "@/styles/components/AboutExperience.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ParagraphMaskAnimation from "@/components/Elements/ParagraphMaskAnimation";

const AboutExperience: FC<IAboutExperience> = ({
	paragraph,
	buttonLink,
	paragraphTwo,
	displayAnimation,
}) => {
	return (
		<div
			className={styles.description}
			style={{
				backgroundImage: `url("/svg/background/blob-haikei-primary-secondary.svg")`,
			}}
		>
			<div className="px-6 py-44">
				<div className="max-w-full lg:max-w-7xl mx-auto p-0 flex flex-col lg:flex-row justify-between gap-6 lg:gap-16">
					<div className="w-full lg:w-1/2 xl:w-[65%]">
						<ParagraphMaskAnimation
							content={paragraph}
							offsetStart={offsetStart}
							offsetFinish={offsetFinish}
							fadeIn={displayAnimation}
							tailwindStyling={
								paragraph
									? "overflow-hidden text-accent-default text-left text-4xl sm:text-6xl lg:text-7xl xl:text-[4.75rem] leading-tight font-FormulaCondensedBold"
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
						<h4 className="mb-4 text-4xl sm:text-6xl lg:text-12xl xl:text-[15rem] leading-tight text-left text-accent-default font-FormulaCondensedBold">
							About
						</h4>
						<div className="h-[10rem]"></div>
						<div className="">
							<Paragraph
								content={paragraphTwo}
								offsetStart={offsetStart}
								offsetFinish={offsetFinish}
								fadeIn={displayAnimation}
								tailwindStyling={
									paragraphTwo
										? "text-accent-default text-left text-lg max-w-sm font-PlusJakartaSans"
										: "hidden"
								}
							/>
							<motion.span
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
							>
								<Link
									href={`${buttonLink?.url}`}
									aria-label={`${buttonLink?.title}`}
									target={buttonLink?.target ? buttonLink?.target : "_blank"}
									className="group w-fit mt-3 relative flex items-center justify-center rounded-3xl overflow-hidden border-2 border-accent-default hover:border-accent-default bg-transparent font-semibold px-12 py-2 transition-all group ease-in-out duration-200 focus:ring-[1px] focus:ring-accent-default focus:ring-offset-1"
								>
									<div className="absolute top-0 w-full h-full transition-all duration-200 ease-in-out transform bg-accent-default right-full group-hover:translate-x-full group-hover:scale-102" />
									<span className="relative z-10 text-medium font-normal font-PlusJakartaSans text-left text-accent-default group-hover:text-primary-default">
										{buttonLink?.title}
									</span>
								</Link>
							</motion.span>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default AboutExperience;
