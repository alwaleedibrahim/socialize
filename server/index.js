const express = require("express")

const app = express()

app.get("/", (req, res)=> {
    res.status(403).send("<h1>Error 403 - Forbidden</h1><p>You don't have permission to access / on this server</p><hr>")
})
app.listen(3000, () => {
    console.log("App is running on port 3000")
})