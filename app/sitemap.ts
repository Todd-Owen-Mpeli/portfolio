// Imports
import {MetadataRoute} from "next";

// Queries Functions
import {getAllPagesSlugs} from "@/graphql/GetAllPagesSlugs";

const sitemap = async () => {
	const [pagesSlugs] = await Promise.all([getAllPagesSlugs()]);

	const siteUrl: any = process.env.SITE_URL;

	/* Pages, News  Posts Arrays */
	const pagesLinks: any = [];
	const portfolioLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Portfolio Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/portfolio/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		portfolioLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: MetadataRoute.Sitemap = [...pagesLinks, ...portfolioLinks];

	return allLinks;
};

export default sitemap;
