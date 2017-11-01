var mqtt = require("mqtt");
var twilio = require("twilio");

module["exports"] = function myService(req, res, next) {
  const mqttClient = mqtt.connect({
    host: "m13.cloudmqtt.com",
    port: 21025,
    protocol: "mqtts",
    username: "ygxbisot",
    password: req.params.password
  });

  mqttClient.publish("test", JSON.stringify(req.params), (err, packet) => {
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
