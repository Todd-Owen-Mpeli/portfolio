// Imports
import {NextPage, Metadata} from "next";
import {flexibleContentType, pageType, postType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/graphql/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/graphql/GetAllFlexibleContentComponents";

// Components
import BackToTopButton from "@/components/Elements/BackToTopButton";
import PageContextProvider from "@/context/providers/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

// Dynamic Pages Generated Metadata
export const generateMetadata = async (): Promise<Metadata> => {
	const seo: any = await getAllSeoContent(pageType?.portfolio, postType?.pages);

	return {
		title: seo?.title,
		description: seo?.metaDesc,
	};
};

const PortfolioPage: NextPage = async () => {
	// Fetch priority content
	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		pageType?.portfolio,
		postType?.pages,
		flexibleContentType?.pages
	);

	return (
		<>
			<PageContextProvider
				content={flexibleContentComponents?.content}
				postTypeFlexibleContent={flexibleContentType?.pages}
			>
				<BackToTopButton link={`#`} />
				<RenderFlexibleContent />
			</PageContextProvider>
		</>
	);
};

export default PortfolioPage;
