import Image from "next/image";
import {motion, useTransform} from "framer-motion";

const Section2 = ({image, scrollYProgress}: any) => {
	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

	const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

	return (
		<motion.div style={{scale, rotate}} className="relative h-screen">
			<Image
				alt={image?.altText}
				src={image?.sourceUrl}
				width={image?.mediaDetails?.width ? image?.mediaDetails?.width : 500}
				height={image?.mediaDetails?.height ? image?.mediaDetails?.height : 500}
			/>
		</motion.div>
	);
};
export default Section2;
