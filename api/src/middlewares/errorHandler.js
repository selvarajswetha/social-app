function errorHandler(error, req, res, next) {

    res.status(500).send({
        error: error,
        message: 'Unable to process request'
    });

}
export default errorHandler;
