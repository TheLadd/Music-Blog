export default function Embed({ uri }) {
    // Determine whether or not this post links Spotify content
    if (uri === null || uri === undefined) {
        return null
    }
    return <div className="embed" id={uri}></div>
}