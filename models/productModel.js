const mongoose = require("mongoose")

const portfolioSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a title"]
        },
        github: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false

        }
    },
    {
        timestamps: true
    }
) 


const portfolio = mongoose.model('portfolio', portfolioSchema);

module.exports = portfolio;