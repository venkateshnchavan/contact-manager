const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Phonebook', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
    .then(() => {
        console.log('Connected to DB')
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = {
    mongoose
}
