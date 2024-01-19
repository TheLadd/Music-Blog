// Custom Middleware Function
    // Modify the response object to be sent in
    // response to the request to:
        // Have status 200 (OK)
        // Have message "Test route is working"
        // TODO: figure what async means
exports.getTest = async (request, response) => {
    response.status(200).json({
        message: "Test route is working"
    });
}