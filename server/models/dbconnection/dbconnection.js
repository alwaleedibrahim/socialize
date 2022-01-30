const mongoose = require("mongoose");
try {
    console.log(process.env.DB_URI)

    mongoose.connect(process.env.DB_URI)
}
catch (err) {
    console.log(err)
}