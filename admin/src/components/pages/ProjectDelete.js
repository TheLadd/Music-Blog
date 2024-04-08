import { useEffect, useState } from "react"
import { getProjects } from "../../functions/getProjects"
import { sendProjectDelete } from "../../functions/sendProjectDelete"

import ProjectForm from "../ProjectForm"
import ProjectSelect from "../ProjectSelect"

export default function ProjectDelete() {
    const [ projects, setProjects ] = useState([])

    useEffect( () => {
        getProjects().then( response => {
            const myProjects = JSON.parse(response.message)
            setProjects(myProjects)
        })
    }, [])

    const SelectParams = { projects: projects }

    return (
        <ProjectForm
            onSubmit={ sendProjectDelete }
            onError={ () => {} }
            elems={[ ProjectSelect]}
            params={[ SelectParams ]}
        />
    )
}