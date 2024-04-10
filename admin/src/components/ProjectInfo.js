export default function ProjectInfo({ register }) {
    return (
        <>
            <li>
                <label htmlFor="ProjectTitle">Title: </label>
                <input type="text" name="ProjectTitle" id="ProjectTitle" {...register('title')}/>
            </li>
            <li>
                <label htmlFor="ProjectDesc">Description: </label>
                <textarea name="ProjectDesc" id="ProjectDesc" {...register('desc')} />
            </li>
            <li>
                <label htmlFor="ProjectTech">Tech Used:  </label>
                <textarea name="ProjectTech" id="ProjectTech" {...register('tech')} />
            </li>
            <li>
                <label htmlFor="ProjectDemo">Demo Link: </label>
                <input type='text' name="ProjectDemo" id="ProjectDemo" {...register('demo')} /> 
            </li>
            <li>
                <label htmlFor="ProjectRepo">Repo Link: </label>
                <input type='text' name="ProjectRepo" id="ProjectRepo" {...register('repo')} />
            </li>
            <li>
                <label htmlFor="ProjectDate">Date Created: </label>
                <input type="date" name="ProjectDate" id="ProjectDate" {...register('dateCreated')} />
            </li>
        </>
    )
}