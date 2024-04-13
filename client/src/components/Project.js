// import PostDate from './PostDate'
import ProjectDate from './ProjectDate'

export default function Project({ project }) {
    return (
        <div className="project">
            <h3>{project.title}</h3>
            <div className='projectSubheader'>
                <ProjectDate date={project.dateCreated} />
                <a href={project.repo}>Repo {'>'}</a>
            </div>
            <p>{project.desc}</p>
            <div className='projectTech'>
                { project.tech.map( tool => {
                    return <div>{tool}</div>
                })}
            </div>
        </div>
    )
}