const { launches } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(httpGetAllLaunches());
}

module.exports = {
  httpGetAllLaunches,
};
