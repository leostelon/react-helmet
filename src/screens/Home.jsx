import React from "react";
import { Helmet } from "react-helmet";

export const Home = () => {
	const homeScreenImage =
		"https://media.istockphoto.com/photos/brown-two-story-all-american-home-picture-id1158713117?k=20&m=1158713117&s=612x612&w=0&h=s_aoDM4KNoixI9qBLmJOBPMccoWsC11zxuBGGgFRiKY=";
	return (
		<div>
			{/* Metatags */}
			<Helmet>
				{/* <!-- Primary Meta Tags --> */}
				<title>Home Screen</title>
				<meta name="title" content="Home Screen" />
				<meta name="description" content="home screen description" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={document.URL} />
				<meta property="og:title" content={"Home Screen"} />
				<meta property="og:description" content="home screen description" />
				<meta property="og:image" content={homeScreenImage} />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={document.URL} />
				<meta property="twitter:title" content={"Home Screen"} />
				<meta
					property="twitter:description"
					content="home screen description"
				/>
				<meta property="twitter:image" content={homeScreenImage} />
			</Helmet>
			Home Screen
		</div>
	);
};
