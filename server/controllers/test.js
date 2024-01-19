exports.getTest = async (request, response) => {
    response.status(200).json({
        message: "Test route is working"
    });
}