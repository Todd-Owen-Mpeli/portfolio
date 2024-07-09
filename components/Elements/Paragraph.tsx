// Imports
import {FC, useRef} from "react";
import DOMPurify from "isomorphic-dompurify";
import {motion, useScroll} from "framer-motion";
import {IParagraph} from "@/types/components/index";

// Styling
import styles from "@/styles/components/Elements/Paragraph.module.scss";

const Paragraph: FC<IParagraph> = ({fadeIn, content, tailwindStyling}) => {
	const container = useRef(null);

	const {scrollYProgress} = useScroll({
		target: container,
		offset: ["start 0.7", "start 0.15"],
	});

	/* Sanitize the WYSIWYG paragraph content */
	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<motion.div
			ref={container}
			style={{opacity: fadeIn ? scrollYProgress : 1}}
			className={
				content ? styles.paragraph + ` block ${tailwindStyling}` : `hidden`
			}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
		/>
	);
};

export default Paragraph;
