import { Router } from "express";

import UserRoutes from "./userRoutes";
import TweetRoutes from "./tweetRoutes";

const router = Router();

router.use("/users", UserRoutes.router);
router.use("/tweets", TweetRoutes.router);


export default router;