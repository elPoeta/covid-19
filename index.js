//echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
const express = require('express');
const app = express();
const { PORT } = require('./config/keys')

require('./startUp/parser')(app);
require('./startUp/routes')(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, err => {
  if (err) {
    console.error(`Error to connect server: ${err}`);
    process.exit(1);
  }
  console.log(`Server connected on port ${PORT}`);
});