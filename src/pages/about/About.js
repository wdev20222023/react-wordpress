import { useState, useEffect } from 'react';
import { API_URL } from '../../api';

const About = () => {
	const [aboutPageInfo, setAboutPageInfo] = useState(null);

	useEffect(() => {
		fetch(API_URL + 'pages?slug=about')
				.then(response => response.json())
				.then(result => {
					setAboutPageInfo(result)
				});
	}, []);

	if(!aboutPageInfo) {
		return null;
	}

	return (
		<div>
			<h1>{aboutPageInfo[0]?.title?.rendered}</h1>
			<div dangerouslySetInnerHTML={{__html: aboutPageInfo[0]?.content?.rendered}} />
		</div>
		);
}

export default About;
