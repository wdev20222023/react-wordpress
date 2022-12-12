import { useState, useEffect } from 'react';
import { API_URL } from '../../api';

const Contact = () => {
	const [contactPageInfo, setContactPageInfo] = useState(null);

	useEffect(() => {
		fetch(API_URL + 'pages?slug=contact')
				.then(response => response.json())
				.then(result => {
					setContactPageInfo(result)
				});
	}, []);

	if(!contactPageInfo) {
		return null;
	}

	return (
		<div>
			<h1>{contactPageInfo[0]?.title?.rendered}</h1>
			<div dangerouslySetInnerHTML={{__html: contactPageInfo[0]?.content?.rendered}} />
		</div>
		);
}

export default Contact;