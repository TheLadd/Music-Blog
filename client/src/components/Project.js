import PostDate from './PostDate'

export default function Project({ project }) {
    return (
        <div className="project">
            <h3>{project.title}</h3>
            <PostDate date={project.dateCreated} />
            <a href={project.repo}>Repo {'>'}</a>
            <a href={project.demo}>Demo {'>'}</a>
            <p>{project.desc}</p>
            <div className='projectTech'>
                { project.tech.map( tool => {
                    return <div>{tool}</div>
                })}
            </div>
        </div>
    )
}