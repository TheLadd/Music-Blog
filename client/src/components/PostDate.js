export default function PostDate({ date }) {
    if (date === null || date === undefined) {
        return null
    }

    // Is there not a better way to do this?
    const postDate = new Date(date)
    const day = postDate.getDate()
    const month = postDate.getMonth()+1
    const year = postDate.getFullYear()
    const hour = postDate.getHours()
    const min = postDate.getMinutes()

    const dt = `${month}/${day}/${year}`
    const tm = `${hour}:${min}`
    
    return <div className="PostDate">{`${dt}, ${tm}`}</div>
}