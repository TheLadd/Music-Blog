// A function that makes an HTTP request to BACKEND_URL
export const getPosts = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'blog/get', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        return await response.json()
    } 
    catch (err) {
        console.log('Error occured fetching posts from backend\n', err)
    }
}