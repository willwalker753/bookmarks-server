function validateBearerToken(req, res, next) {
    const apiToken = process.env.API_TOKEN
    console.log(apiToken);
    const authToken = req.get('Authorization')
    console.log(authToken);
    if (!authToken || authToken !== apiToken) {
        //return res.status(401).json({ error: 'Unauthorized request' })
    }
    next()
}

module.exports = validateBearerToken