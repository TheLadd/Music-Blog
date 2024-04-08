import ProjectForm from "../ProjectForm"
import ProjectSelect from "../ProjectSelect"
import ProjectInfo from "../ProjectInfo"

import { useState, useEffect } from "react"
import { getProjects } from "../../functions/getProjects"
import { sendProjectEdit } from "../../functions/sendProjectEdit"

export default function ProjectEdit() {
    const [ projects, setProjects ] = useState([])

    useState( () => {
        getProjects().then( response => {
            const myProjects = JSON.parse(response.message)
            setProjects( myProjects )
        })
    }, [])

    const SelectParams = { projects: projects }
    const InfoParams = {}

    return (
        <ProjectForm
            onSubmit={ sendProjectEdit }
            onError={ () => {} }
            elems={[ ProjectSelect, ProjectInfo ]}
            params={[SelectParams, InfoParams ]}
        />
    )
}