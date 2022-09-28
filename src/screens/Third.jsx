import React from "react";
import { Helmet } from "react-helmet";

export const Third = () => {
	const thirdScreenImage =
		"https://cdn.pixabay.com/photo/2012/04/23/17/07/three-39116__340.png";
	return (
		<div>
			{/* Metatags */}
			<Helmet>
				{/* <!-- Primary Meta Tags --> */}
				<title>third Screen</title>
				<meta name="title" content="third Screen" />
				<meta name="description" content="third screen description" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={document.URL} />
				<meta property="og:title" content={"third Screen"} />
				<meta property="og:description" content="third screen description" />
				<meta property="og:image" content={thirdScreenImage} />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={document.URL} />
				<meta property="twitter:title" content={"third Screen"} />
				<meta
					property="twitter:description"
					content="third screen description"
				/>
				<meta property="twitter:image" content={thirdScreenImage} />
			</Helmet>
			Third Screen
		</div>
	);
};
