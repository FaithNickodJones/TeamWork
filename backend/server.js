import express from "express";

const app = express();
const port = process.env.PORT || 3000;
app.get("/",(req, res) => {
    res.send("Hello TeamWork API this is DevC");
});
app.listen(port, () => console.log('server running on port  ${port}'));