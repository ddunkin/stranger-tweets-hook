var mqtt = require("mqtt");
var twilio = require("twilio");

module["exports"] = function myService(req, res, next) {
  if (!(req.params.password && req.params.Body)) {
    res.status(400).send();
    return;
  }
  const mqttClient = mqtt.connect({
    host: "m13.cloudmqtt.com",
    port: 21025,
    protocol: "mqtts",
    username: "ygxbisot",
    password: req.params.password
  });

  console.log(req.params.Body);
  mqttClient.publish("message", req.params.Body, (err, packet) => {
    if (err) {
      next(err);
    } else {
      var twiml = new twilio.TwimlResponse();
      twiml.message("Sent");
      res.writeHead(200, { "Content-Type": "text/xml" });
      res.end(twiml.toString());
    }
  });
};
