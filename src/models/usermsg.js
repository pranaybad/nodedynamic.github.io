const mongoose = require("mongoose");
const validator = require("validator");

const userSchena = mongoose.Schema({
    name: {
        type: String,
        // required: true,
        // minLength: 3
    },
    email: {
        type: String,
        //     required: true,
        //     validator(value) {
        //         if (!validator.isEmail(value)) {
        //             throw new Error("Invalide email id")
        //         }
        //     }
    },

})

// we need the collection

const User = mongoose.model("User", userSchena);

module.exports = User;



// const Schema = mongoose.Schema;

// // const serialSchema = new Schema
// const userSchena = mongoose.Schema({
//     serial: { type: String },
//     game: { type: String },
//     date: { type: Date, default: Date.now },
// });

// const serialModel = mongoose.model('serials', serialSchema);