module.exports = {
  getStats: (req, res) => {
    res.status(200).json({stats: "OK"});
  }
}