// Imports
import {FC, useRef} from "react";
import {motion, useInView, useScroll} from "framer-motion";
import {IParagraph} from "@/types/components/index";

// Styling
import styles from "@/styles/components/Elements/Paragraph.module.scss";

const extractPhrases = (htmlString: any) => {
	// Match the content between <p> tags using a regular expression
	const regex = /<p>(.*?)<\/p>/g;
	let match;
	const phrases = [];

	// Use the exec method to find all matches
	while ((match = regex.exec(htmlString)) !== null) {
		// Push the captured group (content between <p> tags) to the phrases array
		phrases.push(match[1].trim());
	}

	return phrases;
};

const ParagraphMaskAnimation: FC<IParagraph> = ({
	fadeIn,
	content,
	tailwindStyling,
}) => {
	const body = useRef(null);
	const phrases = extractPhrases(content);

	const {scrollYProgress} = useScroll({
		target: body,
		offset: ["start 0.9", "start 0.5"],
	});

	const animation = {
		initial: {y: "100%"},

		enter: (i: number) => ({
			y: "0",
			transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i},
		}),
	};

	return (
		<>
			<div ref={body} className="text-[5vw]">
				{phrases.map((phrase, index) => {
					return (
						<div key={index} className={tailwindStyling}>
							<motion.p
								custom={index}
								className="py-0"
								initial="initial"
								variants={animation}
								animate={scrollYProgress ? "enter" : ""}
								style={{opacity: fadeIn ? scrollYProgress : 1}}
							>
								{phrase}
							</motion.p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ParagraphMaskAnimation;
