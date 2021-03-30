const router = require("express").Router()
const {Comment} = require("../../models/")
const auth = require("../../utils/auth")

router.post("/", auth, async (req, res) => {
    try{
        const addComment = await Comment.create({
            ...req.body, userId: req.session.userId
        })
        res.json(addComment)
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router