const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  active: true,
  name: "sequelize",
  logPath: "logs",
  logLevel: "trace"
});

module.exports = { appsignal };
