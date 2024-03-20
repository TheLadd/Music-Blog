// NOTE: this is the exact same function as 'client/src/functions/blog.js'...
export const getPosts = async () => {
    const backendUrl = 'http://localhost:8080/blog/get'
    try {
        const posts = await fetch(backendUrl, {
            method: 'GET',
            headers: {
                Accept:'application/json',
                "Content-type": "application/json"
            }
        });
        return await posts.json()
    }
    catch (err) {
        console.log(`Couldn't retrieve posts from ${backendUrl}`, err)
    }
}