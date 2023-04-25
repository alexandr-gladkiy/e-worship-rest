const express = require("express");
const soundRouter = require("./routes/sound.route")

const PORT = process.env.PORT || 8888;

const base_path_api = "/api/v1"
const app = express();

app.use(express.json);
app.use(base_path_api, soundRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));