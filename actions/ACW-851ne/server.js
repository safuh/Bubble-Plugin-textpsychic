function(properties, context) {
    
    const request = require('request');
	const querystring = require('query-string');
    const parameters = {
        text: properties.elementid,
    };
    const get_request_args = querystring.stringify(parameters);
    const options = {
        url: 'https://blinkr-app.herokuapp.com/correct?'+get_request_args,
        json: true
    };
    request.get(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body);
        return body.text
    });




}