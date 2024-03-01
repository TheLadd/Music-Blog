export default function Embed({ uri }) {
    // Determine whether or not this post links Spotify content
    if (uri === null) {
        return null
    }
    return <div className="embed" id={uri}></div>
}