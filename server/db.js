const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewParser: true,
        useUnifiedTopoloy: true,
    };
    try {
        mongoose.connect("mongodb://localhost:27017/connectionParams", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log(`CONNECTION SUCCESSFUL :) `);
    } catch (err) {
        console.log(err);
        console.log(`CONNECTION UNSUCCESSFUL :(`);
    }
};