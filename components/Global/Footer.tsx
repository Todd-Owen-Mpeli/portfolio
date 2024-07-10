"use client";

// Imports
import {FC} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Footer.module.scss";

// Components
import TextDisperseLink from "@/components/Elements/TextDisperseLink";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<footer className="h-full min-h-[100vh] w-full m-0 py-52 bg-pureBlack font-FormulaCondensedBold flex flex-col items-center justify-center">
			<div className={styles.main}>
				<div className={styles.introLine}>
					<p>Todd Owen Mpeli</p>
				</div>
				<div className={styles.introLine}>
					<p>All Things</p>
					<p>→</p>
				</div>
				<div className={styles.introLine}>
					<p>Front-End</p>
					<p>Development</p>
				</div>
				<div className="flex items-center justify-center lg:justify-start">
					<TextDisperseLink
						styles={styles.introLineHover}
						link={globalContext?.themesOptionsContent?.phoneNumber}
					>
						<span>
							{globalContext?.themesOptionsContent?.phoneNumber?.title}
						</span>
					</TextDisperseLink>
				</div>
				<div className="flex items-center justify-between">
					<TextDisperseLink
						styles={styles.introLineHover}
						link={globalContext?.themesOptionsContent?.email}
					>
						<span>{globalContext?.themesOptionsContent?.email?.title}</span>
					</TextDisperseLink>
					<TextDisperseLink
						styles={styles.introLineHover}
						link={globalContext?.themesOptionsContent?.linkedinLink}
					>
						<span>→LinkedIn</span>
					</TextDisperseLink>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
