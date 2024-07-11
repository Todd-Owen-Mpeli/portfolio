import {motion, useTransform} from "framer-motion";
import Image from "next/image";

const Section1 = ({scrollYProgress}: any) => {
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

	const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

	return (
		<motion.div
			style={{scale, rotate}}
			className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
		>
			<p>Scroll Perspective</p>
			<div className="flex gap-4">
				<p>Section</p>
				<div className="relative w-[12.5vw]">
					<Image
						src={
							"https://vzt.nmy.mybluehost.me/website_1a21b2b3/wp-content/uploads/2024/07/enlarge_Acrylic_Fluid_Art__Pink_paint_bubbles_on_black_waves.png"
						}
						alt="img"
						fill
					/>
				</div>
				<p>Transition</p>
			</div>
		</motion.div>
	);
};

export default Section1;
