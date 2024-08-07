"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import StarProject from "@/components/StarProject";
import TitleParagraph from "@/components/TitleParagraph";
import AboutExperience from "@/components/AboutExperience";
import MaskCursorEffectDescription from "@/components/MaskCursorEffectDescription";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: any = content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMap: any = {
		[`${FlexibleContent}_StarProject`]: StarProject,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_AboutExperience`]: AboutExperience,
		[`${FlexibleContent}_MaskCursorEffectDescription`]:
			MaskCursorEffectDescription,
	};

	return (
		<>
			{content?.content?.length > 0 &&
				content?.content?.map((item: any, index: number) => (
					<section
						key={index}
						className={item?.displaySection ? "block" : "hidden"}
					>
						{componentMap[item?.fieldGroupName] && (
							<Fragment>
								{React.createElement(componentMap[item?.fieldGroupName], {
									...item,
								})}
							</Fragment>
						)}
					</section>
				))}
		</>
	);
};

export default RenderFlexibleContent;
