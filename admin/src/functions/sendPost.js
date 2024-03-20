export const sendPost = async ( data ) => {
    const serverURL = 'http://localhost:8080/blog/post'
    try {
        const response = await fetch(serverURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        return await response.json()
    } 
    catch (err) {
        console.log(`Error sending post data to ${serverURL}`, err)
    }
}