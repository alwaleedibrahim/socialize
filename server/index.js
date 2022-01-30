const app = require("./src/app")
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

console.log(process.env.DB_URI)

app.listen(PORT, () => {
    console.log("App is running on port 3000")
})
