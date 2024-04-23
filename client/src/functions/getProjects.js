export const getProjects = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'portfolio/get', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json' 
            }
        });
        return await response.json()
    }
    catch (err) {
        console.log(`Error getting projects from ${process.env.REACT_APP_BACKEND_URL}`, err)
    }
}