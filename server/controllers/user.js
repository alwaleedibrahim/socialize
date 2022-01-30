const userModel = require("../models/user")

const getAllPosts = (users) => {
    const posts = []
    users.forEach((user) => {
        user.posts.forEach((post) => {
            posts.push(post)
        })
    })
    return posts
}

class User {
    static signup = async (req, res) => {
        try {
            const user = new userModel(req.body)
            await user.save()
            res.send(user)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

    static login = async (req, res) => {
        try {
            const user = await userModel.loginUser(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.send({user, token})
        }
        catch (err) {
            res.send(err)
        }
    }

    static logout = async (req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter(t=>{
                return t.token != req.token
            })
            await req.user.save()
            res.send("logged out")
        }
        catch (err) {
            res.send(err)
        }
    }

    static search = async (req, res) => {
        try {
            const users = await userModel.find()
            res.send(users)
        }
        catch (err) {
            res.send(err)
        }
    }

    static showProfile = async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            if (!user) {
                res.status(404).send("User not found")
            }
            res.send(user)
        }
        catch (err) {
            res.send(err)
        }
    }

    static updateProfile = async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            const heads = ["firstName", "lastName", "password", "email", "age", "gender", "bio", "location", "img"]
            heads.forEach((head) => {
                if (req.body[head]) {
                    user[head] = req.body[head]
                }
            })
            await user.save()
            res.send(user)
        }
        catch (err) {
            res.send(err)
        }
    }

    static deleteProfile = async (req, res) => {
        try {
            const data = await userModel.findByIdAndDelete(req.user.id)
            if(!data) {
                res.status(404).send("User not found")
            }
            res.send(data)
        }
        catch (err) {
            res.send(err)
        }
    }

    static addPost = async (req, res) => {
        try {
            const user = await userModel.findById(req.user.id)
            const post = {
                body: req.body.post,
                date: new Date(),
                author: req.user.id
            }
            user.posts.push(post)
            await user.save()
            res.send(post)
        }
        catch (err) {
            res.send(err)
        }
    }

    static showAllPosts = async (req, res) => {
        try {
            const users = await userModel.find()
            const posts = getAllPosts(users)
            res.send(posts)
        }
        catch (err) {
            res.send(err)
        }
    }

    static like = async (req, res) => {
        try {
            const users = await userModel.find()
            const posts = getAllPosts(users)
            const targetPost = posts.filter(post => post._id == req.params.id)[0]
            const user = await userModel.findById(targetPost.author)
            const like = {
                author: req.user.id
            }
            user.posts.forEach((post, index) => {
                if (post._id == req.params.id) {
                    user.posts[index].likes.push(like)
                }
            })
            await user.save()
            res.send("Liked!")
        }
        catch (err) {
            res.send(err)
        }
    }

    static comment = async (req, res) => {
        try {
            const users = await userModel.find()
            const posts = getAllPosts(users)
            const targetPost = posts.filter(post => post._id == req.params.id)[0]
            const user = await userModel.findById(targetPost.author)
            const comment = {
                body: req.body.comment,
                date: new Date(),
                author: req.user.id
            }
            user.posts.forEach((post, index) => {
                if (post._id == req.params.id) {
                    user.posts[index].comments.push(comment)
                }
            })
            await user.save()
            res.send(comment)
        }
        catch (err) {
            res.send(err)
        }
    }
}

module.exports = User