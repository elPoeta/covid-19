//echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
  if (err) {
    console.error(`Error to connect server: ${err}`);
    process.exit(1);
  }
  console.log(`Server connected on port ${PORT}`);
});