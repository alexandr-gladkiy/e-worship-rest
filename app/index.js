const express = require("express");
const userRouter = require("./routes/user.router");
const soundRouter = require("./routes/sound.router");


const PORT = process.env.PORT || 8888;

const base_path_api = "/api/v1";
const app = express();

app.use(express.json());
app.use(base_path_api, userRouter);
app.use(base_path_api, soundRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));