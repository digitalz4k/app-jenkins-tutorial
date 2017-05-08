'use strict'

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.use('/assets', express.static(__dirname + '/public'))

if (!module.parent) {
    app.listen(2307, () => {
        console.info('Server is now running on port 2307')
    })
}

module.exports = app