const userModel = require("../models/user")

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
                user[head] = req.user[head]
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
            user.posts.push({
                body: req.body.post,
                date: new Date.now()
            })

        }
        catch (err) {
            res.send(err)
        }
    }

    static showPost = async (req, res) => {
        try {
            // TODO
        }
        catch (err) {
            res.send(err)
        }
    }

    static deletePost = async (req, res) => {
        try {
            // TODO
        }
        catch (err) {
            res.send(err)
        }
    }

    static like = async (req, res) => {
        try {
            // TODO
        }
        catch (err) {
            res.send(err)
        }
    }

    static comment = async (req, res) => {
        try {
            // TODO
        }
        catch (err) {
            res.send(err)
        }
    }
}

module.exports = User