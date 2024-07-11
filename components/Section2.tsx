import Image from "next/image";
import {motion, useTransform} from "framer-motion";

const Section2 = ({scrollYProgress}: any) => {
	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

	const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

	return (
		<motion.div style={{scale, rotate}} className="relative h-screen">
			<Image
				src={
					"https://vzt.nmy.mybluehost.me/website_1a21b2b3/wp-content/uploads/2024/07/enlarge_Acrylic_Fluid_Art__Pink_paint_bubbles_on_black_waves.png"
				}
				alt="img"
				fill
			/>
		</motion.div>
	);
};
export default Section2;
