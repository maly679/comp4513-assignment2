
const helper = require('./helper.js');

const handleAllPlays = (app, Play) => {
  app.get("/api/list", (req, resp) => {
    // use mongoose to retrieve all plays from Mongo
    Play.find({}, { playText: 0, _id: 0 }, (err, data) => {
      if (err) {
        resp.json({ message: "Unable to connect to plays" });
      } else {
        // return JSON retrieved by Mongo as response
        resp.json(data);
      }
    });
  });
};

const handleSinglePlay = (app, Play) => {
  app.get("/api/play/:id", (req, resp) => {
    Play.find({ id: req.params.id }, { _id: 0 }, (err, data) => {
      if (err) {
        resp.json({ message: "Play not found" });
      } else {
        resp.json(data);
      }
    });
  });
};

module.exports = {
  handleAllPlays,
  handleSinglePlay,
};
