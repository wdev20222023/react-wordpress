import { useState, useEffect } from 'react';
import { API_URL } from '../../api';

import ProjectList from '../../components/project-list/ProjectList';

const Homepage = () => {
	const [projects, setProjects] = useState(null);
	const [categories, setCategories] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchProjects = async(category = '') => {
		setLoading(true);
		await fetch(API_URL + `projects${category}`)
				.then(response => response.json())
				.then(result => {
					setProjects(result)
					setLoading(false)
				});
	}

	const fetchCategories = async() => {
		await fetch(API_URL + 'categories')
				.then(response => response.json())
				.then(result => {
					setCategories(result)
				});
	}

	useEffect(() => {
		fetchProjects();
		fetchCategories();
	}, [])

	if (!projects || !categories) {
		return null;
	}

	const projectList = !loading ? (
			<ProjectList projects={projects} />
		) : (
			<h2>Loading...</h2>
		) 

	return (
		<div>
			<h2>Projects</h2>
			<button className="filter-button" onClick={() => fetchProjects()}>All Projects</button>
			{categories.map(category => (
				<button 
					className="filter-button" 
					key={category.id} 
					onClick={() => fetchProjects(`?categories=${category.id}`)}
				>{category.name}</button>
				))
			}
			{projectList}
		</div>
		)
}

export default Homepage