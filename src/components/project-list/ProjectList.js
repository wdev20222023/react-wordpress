import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
	return (
		<div>
			<ul>
				{projects.map(project => (
					<li key={project.id}>
						<Link to={`/projects/${project.slug}`}>
							{project?.title?.rendered}
						</Link>
					</li>
					))}
			</ul>
		</div>
		)
}

export default ProjectList;