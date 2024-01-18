import { PrismaClient } from "@prisma/client";

import {Exception} from "../utils/error-handler"

import {Request, Response} from "express"

const prisma = new PrismaClient();

export class TweetController {
    async createTweet (req: Request, res:Response){
        const {content, image, userId} =  req.body; 
        try {
            const tweet = await prisma.tweet.create({
                data:{
                    content,
                    image,
                    userId
                }
            })

            res.status(201).json({
                statusCode:201,
                message:"Ztweet have been successfully posted"
            })

        } catch (error) {
            throw new Exception(400,"Error creating ztweets")
        }
    };

    async listTweets(req:Request, res:Response){
        try {
            const tweets = await prisma.tweet.findMany()

            if(!tweets){
                throw new Exception(404,"Ztweets not found")
            }

            res.status(200).json({
                statusCode:200,
                message:"Ztweets successfully retrieved",
                payload:tweets
            })
        } catch (error) {
            throw new Exception(400,"Error feteching ztweets")
        }
    };

    async getTweet(req:Request, res:Response){
        try {
            const {id} = req.params;
            const tweet = await prisma.tweet.findUnique({where:{id:Number(id)}})

            if(!tweet){
                res.status(404).json({
                    statusCode:404,
                    message:"Ztweet not found"
                })
            }
        } catch (error) {
            throw new Exception(400,"Error retrieving ztweets")
        }
    };

    async deleteTweet(req:Request, res:Response){
        try {
            const {id} = req.params;
            const deletedTweet = await prisma.tweet.delete({where:{id:Number(id)}})

            if(!id){
                throw new Exception(400,"post ID required")
            }

            res.status(400).json({
                statusCode:200,
                message:"ztweet successfully deleted",
                payload:deletedTweet
            })
        } catch (error) {
            throw new Exception(400,"Error editing ztweet")
        }
    };

    async editTweet(req:Request, res:Response){
        try {
            const {id} = req.params;
            const {content, image} = req.body;

            const editedTweet = await prisma.tweet.update({
                where:{id:Number(id)},
                data:{content, image}
            })

            res.status(200).json({
                statusCode:200,
                message:"Ztweet successfully updated",
                payload:editedTweet

            })
        } catch (error) {
            throw new Exception(400,"Error Editing Ztweet")
        }
    }
}