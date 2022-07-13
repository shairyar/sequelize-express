const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  active: true,
  name: "sequelize",
  pushApiKey: "<PUSH-API-KEY>",
  logPath: "logs",
  logLevel: "trace"
});

module.exports = { appsignal };
