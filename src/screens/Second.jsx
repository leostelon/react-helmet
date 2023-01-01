import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

export const Second = () => {
	const [secondScreenImage, setSecondScreenImage] = useState("");
	useEffect(() => {
		setImage();
	}, []);

	async function setImage() {
		await new Promise((res, rej) => {
			setTimeout(() => {
				res(true);
			}, 5500);
		});
		setSecondScreenImage(
			"https://blogs.edgehill.ac.uk/insideedge/files/2017/05/2ndtime.jpg"
		);
	}

	return (
		<div>
			{/* Metatags */}
			<Helmet>
				{/* <!-- Primary Meta Tags --> */}
				<title>Second Screen</title>
				<meta name='title' content='Second Screen' />
				<meta name='description' content='second screen description' />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content={document.URL} />
				<meta property='og:title' content={"second Screen"} />
				<meta property='og:description' content='second screen description' />
				<meta property='og:image' content={secondScreenImage} />

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content={document.URL} />
				<meta property='twitter:title' content={"second Screen"} />
				<meta
					property='twitter:description'
					content='second screen description'
				/>
				<meta property='twitter:image' content={secondScreenImage} />
			</Helmet>
			Second Screen
		</div>
	);
};
