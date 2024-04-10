export const getProjects = async () => {
    const serverUrl = 'http://localhost:8080/portfolio/get'
    try {
        const response = await fetch(serverUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json' 
            }
        });
        return await response.json()
    }
    catch (err) {
        console.log(`Error getting projects from ${serverUrl}`, err)
    }
}