const mongoose = require("mongoose");
try {
    mongoose.connect(process.env.DB_URI)
}
catch (err) {
    console.log(err)
}