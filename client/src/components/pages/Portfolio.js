import { useState, useEffect } from "react"
import { getProjects } from "../../functions/getProjects"

import Nav from '../Nav'
import ProjectList from '../ProjectList'

export default function Portfolio() {
    const [ projects, setProjects ] = useState([])
    
    useEffect( () => {
        getProjects()
            .then( response => {
                const myProjects = JSON.parse(response.message)
                myProjects.sort( ( a, b ) => {
                    if (a.dateCreated < b.dateCreated) { return 1 }
                    if (a.dateCreated > b.dateCreated) { return -1 }
                    return 0
                })

                setProjects(myProjects)
            })
            .catch( err => console.log('Error in getProjects'))
    }, [])

    return (
        <>
            <Nav activePage={0} />
            <ProjectList projects={projects} />
        </>
    )
}