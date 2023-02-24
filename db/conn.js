const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb+srv://augustocparaujo:F8j34DfU8Z0Roz@cluster0.ojkciox.mongodb.net/?retryWrites=true&w=majority')
    console.log('Conectado ao banco')
}

main().catch((err) => console.log(err))

module.exports = mongoose
