const handleSingleUser = (app, User) => {
  app.route("/api/user/:id").get((req, resp) => {
    User.find({ id: req.params.id }, { _id: 0 }, (err, data) => {
      if (err) {
        resp.json({ message: "User not found" });
      } else {
        resp.json(data);
      }
    });
  });
};

module.exports = {
  handleSingleUser,
};
