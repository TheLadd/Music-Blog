export const sendDelete = async ( data ) => {
    const serverUrl = 'http://localhost:8080/blog/delete'
    console.log(`Sending a delete request for ${JSON.stringify(data)}`)
    try {
        const response = await fetch(serverUrl, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                "Content-type": 'application/json; charset=UTF-8'
            }
        })
        console.log(`response.body: ${response.body}`)
        return await response.json()
    }
    catch {
        console.log(`Error sending delete request to ${serverUrl}`)
    }
} 