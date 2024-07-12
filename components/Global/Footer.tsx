"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
	offsetStart,
	offsetFinish,
} from "@/animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Footer.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";
import TextDisperseLink from "@/components/Elements/TextDisperseLink";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<footer
			className="relative h-full min-h-screen w-full m-0 pt-2 pb-4 bg-pureBlack font-FormulaCondensedBold"
			style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
		>
			<div className="fixed bottom-0 h-screen w-full flex flex-col justify-between">
				<div className={styles.main}>
					<div className={styles.introLine}>
						<p>Todd Owen Mpeli</p>
					</div>
					<div className="flex items-center justify-center lg:justify-between">
						<TextDisperseLink
							styles={styles.introLineHover}
							link={globalContext?.themesOptionsContent?.phoneNumber}
						>
							<span>
								{globalContext?.themesOptionsContent?.phoneNumber?.title}
							</span>
						</TextDisperseLink>
						<TextDisperseLink
							styles={styles.introLineHover}
							link={globalContext?.themesOptionsContent?.email}
						>
							<span>{globalContext?.themesOptionsContent?.email?.title}</span>
						</TextDisperseLink>
					</div>
					<div className="flex items-center justify-between">
						<TextDisperseLink
							styles={styles.introLineHover}
							link={globalContext?.themesOptionsContent?.githubLink}
						>
							<span>
								{globalContext?.themesOptionsContent?.githubLink?.title}
							</span>
						</TextDisperseLink>
						<TextDisperseLink
							styles={styles.introLineHover}
							link={globalContext?.themesOptionsContent?.linkedinLink}
						>
							<span>
								{globalContext?.themesOptionsContent?.linkedinLink?.title}
							</span>
						</TextDisperseLink>
					</div>
				</div>
				<div className="w-[75vw] mx-auto px-0 py-1 flex flex-col-reverse items-center justify-between lg:flex-row">
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="w-auto px-4 py-2 flex flex-col lg:flex-row items-center gap-4"
					>
						<Paragraph
							fadeIn={false}
							offsetStart={offsetStart}
							offsetFinish={offsetFinish}
							content={globalContext?.themesOptionsContent?.copyrightText}
							tailwindStyling="max-w-lg mx-auto lg:mx-0 text-black hover:text-darkGrey text-sm text-center lg:text-left tracking-wide uppercase transition-all ease-in-out duration-500"
						/>
						<Link
							href={`${globalContext?.themesOptionsContent?.githubLink?.url}`}
							aria-label={`${globalContext?.themesOptionsContent?.githubLink?.title}`}
							target={
								globalContext?.themesOptionsContent?.githubLink?.target
									? globalContext?.themesOptionsContent?.githubLink?.target
									: "_self"
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								id="Capa_1"
								x="0px"
								y="0px"
								viewBox="0 0 24 24"
								width="512"
								height="512"
								fill="none"
								className="w-4 h-4 object-center object-contain fill-darkGrey hover:fill-white  transition-all ease-in-out duration-500"
							>
								<g>
									<path d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z" />
									<path d="M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z" />
									<path d="M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z" />
									<path d="M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z" />
									<path d="M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z" />
									<path d="M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z" />
									<path d="M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z" />
									<path d="M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z" />
								</g>
							</svg>
						</Link>
					</motion.div>
					<motion.ul
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col sm:flex-row -m-6 w-auto gap-2 sm:gap-6 p-6"
					>
						<motion.li
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
						>
							<Link
								aria-label="Download CV Button"
								href={`${globalContext?.themesOptionsContent?.resumeDownload?.url}`}
								target={`${
									globalContext?.themesOptionsContent?.resumeDownload?.target
										? globalContext?.themesOptionsContent?.resumeDownload
												?.target
										: "_self"
								}`}
								className="text-secondary-default hover:text-white text-sm text-center lg:text-left tracking-widest uppercase transition-all ease-in-out duration-500"
							>
								→{globalContext?.themesOptionsContent?.resumeDownload?.title}
							</Link>
						</motion.li>
						{globalContext?.copyrightLinks?.length > 0 ? (
							globalContext?.copyrightLinks?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.li
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<Link
											href={`${item?.node?.url}`}
											target={`${
												item?.node?.target ? item?.node?.target : "_self"
											}`}
											aria-label={`${item?.node?.label}`}
											className="text-black hover:text-darkGrey text-sm text-center lg:text-left tracking-wide uppercase transition-all ease-in-out duration-500"
										>
											{item?.node?.label}
										</Link>
									</motion.li>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
