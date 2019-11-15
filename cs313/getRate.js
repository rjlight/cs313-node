const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get("/", function(req, res) {
    console.log("got a get");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))