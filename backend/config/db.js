const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log('database connection successfully'))
    .catch(error => console.error('Error: ' + error))