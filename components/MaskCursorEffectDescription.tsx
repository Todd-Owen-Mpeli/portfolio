// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, initial} from "@/animations/animations";
import {IMaskCursorEffectDescription} from "@/types/components";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const MaskCursorEffectDescription: FC<IMaskCursorEffectDescription> = ({
	paragraph,
}) => {
	return (
		<motion.div
			initial={initial}
			whileInView={fadeInUp}
			viewport={{once: true}}
		>
			<Paragraph
				content={paragraph}
				tailwindStyling={
					paragraph
						? `lg:max-w-6xl mx-auto mb-10 text-black leading-[1.75rem] text-paragraph text-center lg:text-left`
						: "hidden"
				}
			/>
		</motion.div>
	);
};

export default MaskCursorEffectDescription;
