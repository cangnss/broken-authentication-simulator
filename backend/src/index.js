const express = require("express")
const bodyParser = require("body-parser")

const app = express();

const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    return res.status(200).send({ "message": "hi" })
})



app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
})