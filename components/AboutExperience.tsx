// Imports
import {FC} from "react";
import Image from "next/image";
import {IAboutExperience} from "@/types/components";

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
	return (
		<>
			<div className="h-ful relative bg-pureBlack"></div>
		</>
	);
};

export default AboutExperience;
