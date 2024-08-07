import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES & BLOGS POSTS*/
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllFlexibleContentComponents = async (
	slug: string,
	postType: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {name: "${slug}", status: PUBLISH}) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_StarProject {
												fieldGroupName
												displaySection
												title
												paragraph
												paragraphTwo
												displayAnimation
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_AboutExperience {
												fieldGroupName
												displaySection
												paragraph
												paragraphTwo
												displayAnimation
												buttonLink {
            										url
            										title
            										target
            									}
											}
											... on ${postTypeFlexibleContent}_MaskCursorEffectDescription {
												fieldGroupName
												displaySection
												paragraph
												hiddenParagraph
												displayAnimation
												hiddenBackgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												displaySection
												title
												paragraph
												displayParagraph
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												displaySection
												title
												paragraph
											}
										}
									}
								}
							}
						}
					}
        		}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			content:
				response.data?.mainContent?.edges[0]?.node?.template?.flexibleContent
					?.flexibleContent,
		};
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all flexible content components"
		);
	}
};
