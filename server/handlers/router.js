const router = require("express").Router()
const auth = require("../helpers/auth")
const UserController = require("../controllers/user")

// sign up
router.post("/signup", UserController.signup)
// login
router.post("/login", UserController.login)
//logout
router.post("/logout", UserController.logout)

// Serch users
router.get("/search", UserController.search)
// Show profile
router.get("/profile/:id", UserController.showProfile)
// Update profile
router.post("/profile/:id", UserController.updateProfile)
// Delete profile
router.delete("/profile/:id", UserController.deleteProfile)

// add post 
router.post("/posts", UserController.addPost)
// show post
router.get("/posts/:id", UserController.showPost)
// delete post
router.delete("/posts/:id", UserController.deletePost)


// like post
router.post("/posts/:id/like", UserController.like)
// add comment
router.post("/posts/:id/comment", UserController.comment)


router.get("/", (req, res)=> {
    res.status(403).send("<h1>Error 403 - Forbidden</h1><p>You don't have permission to access / on this server</p><hr>")
})

router.get("*", (req, res) => {
    res.status(404).send("<h1>Error 404 - Not Found</h1><p>The requested URL was not found on server</p><hr>")
})

module.exports = router