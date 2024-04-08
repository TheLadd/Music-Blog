export const sendProjectEdit = async ( data ) => {
    const ServerURL = 'http://localhost:8080/portfolio/put'
    try {
        const response = await fetch(ServerURL, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        return await response.json()
    }
    catch (err) {
        console.log(`Error sending project edit to ${ServerURL}`, err)
    }
}