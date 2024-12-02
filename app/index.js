const express = require("express");
const userRouter = require("./routes/user_router");
const userGroupRouter = require("./routes/userGroup_router");
const soundRouter = require("./routes//sound_router");
const soundListRouter = require("./routes/soundList_router");
const eventRouter = require("./routes/event_router");

const PORT = process.env.PORT || 8888;

const base_path_api = "/api/v1";
const app = express();

app.use(express.json());
app.use(base_path_api, userRouter);
app.use(base_path_api, userGroupRouter);
app.use(base_path_api, soundRouter);
app.use(base_path_api, soundListRouter);
app.use(base_path_api, eventRouter);

//TODO: add tag router

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));