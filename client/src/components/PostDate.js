export default function PostDate({ date }) {
    if (date === null) {
        return null
    }
    return <div className="PostDate">{date}</div>
}