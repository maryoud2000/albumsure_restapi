const Album = require("./albumModles");

exports.addAlbum = async (req, res) => {
    try {
      const album = await Album.create(req.body);
      res.status(200).send({ album: album.albumName, artistName });
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    }
  };