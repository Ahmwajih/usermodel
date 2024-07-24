module.exports = {err, req, res, next} => {
    const erroStatusCode = res.erroStatusCode || 500;
    res.status(erroStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause || 'Internal Server Error'
    })
}