const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log(req.body.token)
        const decoded = jwt.verify(req.body.token, "joyron");

        req.userData = decoded;
        console.log(req.userData);
        next();
    } catch (err) {
        return err;
    }

};