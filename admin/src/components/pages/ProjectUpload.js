import ProjectForm from '../ProjectForm'
import ProjectInfo from '../ProjectInfo'

import { sendProject } from '../../functions/sendProject'

export default function ProjectUpload() {
    const onError = (err, e) => { console.log(`Error on form submit: ${err}`)}

    const InfoParams = {}

    return (
        <ProjectForm 
            onSubmit={ sendProject }
            onError={ onError }
            elems={[ ProjectInfo ]}
            params={[ InfoParams ]}
        />
    )
}