const express = require('express')
const app = express()

app.use('/', require('connect-history-api-fallback')())
app.use('/', express.static('dist'))
app.use('/json', express.static('json'))

const port = process.env.PORT || 40000
const server = app.listen(port, function(){

    console.log(`\nProject is running at http://localhost:${port}/\n`)    
})