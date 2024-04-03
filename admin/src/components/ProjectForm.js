import { createElement } from "react"
import { useForm } from "react-hook-form"

export default function ProjectForm({ onSubmit, onError, elems, params }) {
    // Where onSubmit and onError are functions to handle form submission
    // Where 'elems' is an list of .jsx components to have a form list elements 
    // Where 'params' is list of <object of parameters> ( where { <paramName>:<paramValue> } )
    const { register, handleSubmit } = useForm()

    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit, onError) }>
                <ul>
                    { elems.map( (elem, i) => {
                        params[i]['register'] = register
                        return createElement(elem, params[i])
                    })}

                    <li>
                        <input type="submit" />
                    </li>
                </ul>
            </form>
        </>
    )
}