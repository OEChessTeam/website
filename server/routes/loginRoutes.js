const UserSchema = require('../models/UserSchema')
const bcrypt = require('bcrypt')
const express = require('express')
const {hash} = require("bcrypt");
const router = express.Router()

router.post('/register', async (req, res) => {
    const { email, password, place } = req.body

    if (!email || !password)
        return res.status(400).json({ msg: 'Password and email are required'})

    if (password.length < 8) {
        return res
            .status(400)
            .json({ msg: 'Password should be at least 8 characters long'})
    }

    const user = await UserSchema.findOne({ email })
    const plU = await UserSchema.findOne({ place })

    if (user) return res.status(400).json({ msg: 'User already exists' })
    if (plU) return res.status(400).json({ msg: "rank currently held"})

    const newUser = new UserSchema({ email, password, place })

    bcrypt.hash(password, 7, async (err, hash) =>{
        if (err)
            return res.status(400).json({ msg: 'error while saving the password'})
    })

    newUser.password = hash
    const savedUserRes = await newUser.save()

    if (savedUserRes)
        return res.status(200).json({ msg: 'user is successfully saved' })
})

router.post(`/login`, async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({ msg: 'Something missing '})
    }

    const user = await UserSchema.findOne({ email: email })

    if (!user) {
        return res.status(400).json({ msg: 'User not found' })
    }

    const matchPassword = await
        bcrypt.compare(password, user.password)

    if (matchPassword) {
        const userSession = { email: user.email }
        req.session.user = userSession

        return res
            .status(200)
            .json({ msg: 'You have logged in successfully', userSession })
    } else {
        return res.status(400).json({ msg: 'Invalid credential' })
    }
})

router.delete(`/logout`, async (req, res) => {
    req.session.destroy((error) => {
        if (error) throw error

        res.clearCookie('session-id')
        res.status(200).send('Logout Success')
    })
})

router.get('/isAuth', async (req, res) => {
    if (req.session.user) {
        return res.json(req.session.user);
    } else {
        return res.status(401).json('unauthorize')
    }
})

module.exports = router
