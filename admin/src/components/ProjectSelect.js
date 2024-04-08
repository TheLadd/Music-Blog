export default function ProjectSelect({ projects, register }) {
    const onSelect = () => {
        const select = document.getElementById('ProjectId')
        const targetId = select.options[ select.selectedIndex ].value
        const selectedProject = projects.find( project => project._id === targetId )

        if (document.getElementById('ProjectTitle')) {
            document.getElementById('ProjectTitle').value = selectedProject.title
            document.getElementById('ProjectDesc').value = selectedProject.desc
            document.getElementById('ProjectRepo').value = selectedProject.repo
            document.getElementById('ProjectDemo').value = selectedProject.demo
            document.getElementById('ProjectDate').value = selectedProject.dateCreated.slice(0, 10)
        }
    }

    const ProjectOptions = projects.map( project => {
        return <option value={project._id}>{project.title}</option>
    })


    return (
        <li>
            <select id="ProjectId" className="ProjectId" onInput={onSelect} defaultValue="default" {...register('id')}>
                <option value="default" disabled={true}>--- Please Select ---</option>
                { ProjectOptions }
            </select>
        </li>
    )
}