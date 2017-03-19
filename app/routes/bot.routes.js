module.exports = function(app, config) {
    app.get('/webhook', function(req, res) {
        console.log(req.query);
        if (req.query['hub.mode'] === 'subscribe' &&
            req.query['hub.verify_token'] === config.fbToken) {
            console.log("Validating webhook");
            res.status(200).send(req.query['hub.challenge']);
        } else {
            console.error("Failed validation. Make sure the validation tokens match.");
            res.sendStatus(403);
        }
    });
};