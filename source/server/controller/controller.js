const Newsletter = require("../model/Newsletter");

const controllerPost = async (req, res) => {
  const { email } = req.body;
  const newsLetter = new Newsletter({
    email,
  });
  await newsLetter.save();
  res.json({ mensaje: "Gracias por suscribirte!" }).status(201);
};
module.exports = {
  controllerPost,
};
