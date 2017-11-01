var mqtt = require("mqtt");
var twilio = require("twilio");

module["exports"] = function myService(req, res, next) {
  var twiml = new twilio.TwimlResponse();
  twiml.message("The Robots are coming! Head for the hills!");
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());

  // res.json(req.params);
};
