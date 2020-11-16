const mongoose = require("mongoose");

const ShortUrlSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            unique: false,
            required: true,
        },
        short: {
            type: String,
            unique: true,
            required: true,
        },
        expiry: {
            type: Date,
            default: new Date(Date.now() + 24 * 60 * 60 * 1000),
        },
    },
    {
        timestamps: true,
    }
);

const ShortUrl = mongoose.model("ShortUrl", ShortUrlSchema);

module.exports = { ShortUrl };
