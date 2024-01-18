import express from "express";
// import userRoutes from "./routes/userRoutes"
// import tweetRoutes from "./routes/tweetRoutes"

import BaseRouter from "./routes/index"

const app = express();

app.use(express.json());
// app.use('/user',userRoutes);
// app.use('/tweet',tweetRoutes)

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: "Welcome to Tweeps API"
    })
});

app.use("/api/v1", BaseRouter)

app.listen(3000, () => {
    console.log("Server ready at localhost:3000")
})