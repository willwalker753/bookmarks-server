function validateBearerToken(req, res, next) {
    const apiToken = process.env.API_TOKEN
    const authToken = req.get('Authorization')
    if (!authToken || authToken !== apiToken) {
        return res.status(401).json({ error: 'Unauthorized request' })
    }
    next()
}

module.exports = validateBearerToken;