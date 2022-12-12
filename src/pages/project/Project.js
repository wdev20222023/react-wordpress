import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../api';

const Project = () => {
	const [projectInfo, setProjectInfo] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		fetch(API_URL + `projects?slug=${slug}`)
		.then(response => response.json())
		.then(result => {
			setProjectInfo(result)
		});
	}, [slug])

	if (!projectInfo) {
		return null;
	}

	return (
		<div>
			<h1>{projectInfo[0]?.title?.rendered}</h1>
			<div dangerouslySetInnerHTML={{__html: projectInfo[0]?.content?.rendered}} />
			<div>
				<p>Client: {projectInfo[0]?.acf?.client}</p>
				<img src={projectInfo[0]?.acf?.image} width='100' alt={projectInfo[0]?.acf?.client} />
			</div>
		</div>
		)
}

export default Project;