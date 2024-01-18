import { Router } from "express";

import { TweetController } from "../controllers/tweet_controller";


class TweetRouter {
    private tweetController = new TweetController();
    readonly router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router 

            // create tweet
            .post('/', this.tweetController.createTweet)

            // list tweet
            .get("/", this.tweetController.listTweets)

            //get tweet
            .get('/:id', this.tweetController.getTweet)

            // update tweet
            .put("/:id", this.tweetController.editTweet)

            // delete tweet
            .delete("/:id", this.tweetController.deleteTweet)
    }
}


export default new TweetRouter();