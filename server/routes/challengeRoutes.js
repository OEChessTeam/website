const ChallengeSchema = require("../models/ChallengeSchema");
const express = require('express');
const router = express.Router();

router.post('/challenge', async (req, res) => {

    const { currT, cPos } = req.body;

    const userPos = req.user.place;

    const lDate = await async function ( cb ) {
        ChallengeSchema.findOne({}, {}, { sort: { 'created_at' : -1 } }, function (err, post) {
            cb( null, post.created_at.getTime() )
        })
    };

    if ((cPos - userPos) > 2 || (cPos - userPos) <= 0) {
        return res.status(400).json({ msg: 'no' })
    }

    const days = (currT - lDate) / 1000.0 / 60.0 / 60.0 / 24.0;

    if (days < 7) return res.status(400).json({ msg: 'stop sending challenges, you shit' })

    return res.status(200).json({ msg: 'Success on challenge' });
})

module.exports = router
