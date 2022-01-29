const router = require("express").Router()

router.get("/", (req, res)=> {
    res.status(403).send("<h1>Error 403 - Forbidden</h1><p>You don't have permission to access / on this server</p><hr>")
})

router.get("*", (req, res) => {
    res.status(404).send("<h1>Error 404 - Not Found</h1><p>The requested URL was not found on server</p><hr>")
})

module.exports = router