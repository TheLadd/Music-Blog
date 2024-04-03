import { createElement } from "react"
import { useForm } from "react-hook-form"
import PostInfo from './PostInfo.js'

export default function PostForm({ onSubmit, onError, elems, params}) {
    // Where onSubmit and onError are functions to handle form submission
    // Where 'elems' is an list of .jsx components to have a form list elements 
    // Where 'params' is list of <object of parameters> ( where { <paramName>:<paramValue> } )
    const { register, handleSubmit } = useForm()

    // Adds form clearning to the onSubmit function
    const submitAndClear = ( data ) => {
        onSubmit(data)
        document.getElementsByTagName('form')[0].reset()
    }

    return (
        <form onSubmit={ handleSubmit(submitAndClear, onError) }>
            <ul>
                { elems.map( (elem, i) => {
                    params[i]['register'] = register
                    return createElement(elem, params[i]) 
                })}
            
                <li>
                    <input type="submit"></input>
                </li>
            </ul>
        </form>
    )
}