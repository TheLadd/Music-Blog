export default function PostForm() {
    return (
        <form action="http://localhost:8080/admin/post" method="POST">
        <ul>
            <li>
                <label for='title'>Title: </label>
                <input type='text' id='title' name="title"></input>
            </li>
            <li>
                <label for='body'>Body: </label>
                <input type='text' id='body' name="body"></input>
            </li>
            <li>
                <label for='uri'>URI: </label>
                <input type='text' id='uri' name="uri"></input>
            </li>
            <li>
                <input type="submit"></input>
            </li>
        </ul>
        </form>
    )
}