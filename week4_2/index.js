const express=require('express');
const bodyparser=require('body-parser');
const app=express();

const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
// const JWT_SECRET_KEY = "admin";

// middleware for parsing request body
app.use(bodyparser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// module.exports=JWT_SECRET_KEY;