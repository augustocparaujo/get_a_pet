const mongoose = require('../db/conn')
const { Schema } = mongoose

const Pet = mongoose.model(
    'Pet',
    new Schema(
        {
            name:{
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            },
            wight: {
                type: Number,
                required: true,
            },
            color: {
                type: String,
                required: true
            },
            images: {
                type: Array,
                required: true
            },
            available:{
                type: Boolean
            },
            user: Object, //array de info do user
            adopter: Object //array de info de adoção
        },
        { timestamps: true } //add automatic creat_add, update_add
    ),
)

module.exports = Pet