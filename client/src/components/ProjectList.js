import Project from './Project'

export default function ProjectList({ projects }) {
    return (
        <>{
            projects.map( project => {
                return <Project key={project._id} id={project._id} project={project} />
            })
        }</>
    )
}