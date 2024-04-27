// import context from '../../public/netflify-context.txt'

// A function that makes an HTTP request to BACKEND_URL
export const getPosts = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'blog/get', {
        // const response = await fetch(process.env.BACKEND_URL + '/blog/get', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        return await response.json()
    } 
    catch (err) {
        console.log(`Error occured fetching posts from ${process.env.REACT_APP_BACKEND_URL}\n`, err)
        // console.log(`Error occured fetching posts from ${process.env.BACKEND_URL}\n`, err)
    }
}