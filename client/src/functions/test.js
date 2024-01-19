export const getTest = async () => {
    try {
        // const response = await fetch(process.env.BACKEND_URL + '/test', {
        const response = await fetch('http://localhost:8080/test', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        return await response.json()
    } 
    catch (err) {}
}