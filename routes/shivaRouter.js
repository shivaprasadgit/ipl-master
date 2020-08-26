var express = require("express");
const router = express.Router()

router.route('/shiva').get((req, res) => {
    res.send([{
        "id":1,
        "name":"Nagarjuna",
        "team":"India",
        "age": "30 years 230 days",
        "born":"November 5, 1988, Delhi",
        "batting":"Right-hand bat",
        "bowling":"Right-arm medium",

    },
    {
        "id":2,
        "name":"Jasprit Bumrah",
        "team":"India",
        "age": "23 years 326 days",
        "born":"December 6, 1993, Ahmedabad",
        "batting":"Right-hand bat",
        "bowling":"Right-arm medium",
    }])
})

module.exports = router
