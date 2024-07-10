import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* THEMES OPTIONS CONTENT
 The ID number refers to the
"Global Content" page ID*/
export const getThemesOptionsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				themeOptions(where: {name: "Global Content", status: PUBLISH}) {
					edges {
						node {
							themeOptions {
								address
								textarea
								email {
									target
									title
									url
								}
								phoneNumber {
									target
									title
									url
								}
								copyrightText
								resumeDownload {
									url
									title
									target
								}
								phoneNumber {
									url
									title
									target
								}
								linkedinLink {
									url
									title
									target
								}
								errorPageContent {
									displaySection
									title
									paragraph
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										altText
										sourceUrl
										mediaDetails {
											height
											width
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

		return response?.data?.themeOptions?.edges[0]?.node?.themeOptions;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch themes options content"
		);
	}
};
