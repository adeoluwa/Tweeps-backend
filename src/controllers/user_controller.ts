import { PrismaClient } from "@prisma/client";

import { Exception } from "../utils/error-handler";

import {Request, Response, NextFunction} from "express";

const prisma = new  PrismaClient();

export class UserController {
    // create user
    async createUsers (req:Request, res:Response){

        const {email, name, username} = req.body;
        try {
            const createUser = await prisma.user.create({
                data:{
                    email,
                    name,
                    username,
                    bio:"Hello there, I am using Tweeps, let's connect",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0groa4TIPGawvqv3iM3eibhHTyGbLxlTQR5QcAkjNg&s"
                }
            })

            res.status(201).json({
                statuCode:201,
                message:"User Created Successfully",
                payload:createUser
            })
        } catch (error) {
            throw new Exception(400,"Username and email should be unique")
        }
        
    };

    async listUsers(req:Request, res:Response){
        try {
            const allUsers = await prisma.user.findMany();

            res.status(200).json({
                statusCode: 200,
                messgage:"User's list Successfully feteched",
                payload:allUsers
            })
        } catch (error) {
            throw new Exception(400,"Error feteching users list")
        }
    }

    async getUser(req:Request, res:Response){
        try {
            const {id} = req.params;
            const user = await prisma.user.findUnique({where:{
                id:Number(id)
            }})

            if(!user){
                throw new Exception(404,"User details not found")
            }

            res.status(200).json({
                statusCode:200,
                message:"User's details Successfully retrieved",
                payload:user
            })

        } catch (error) {
            throw new Exception(400,"Error get slected user's details")
        }
    };

    async editUser(req:Request, res:Response){
        try {
            const {id} = req.params;
            const {bio, name, image} = req.body;

            if(!id){
                throw new Exception(400,"User's id is Required")
            }

            const editedUser = await prisma.user.update({
                where:{id: Number(id)},
                data:{bio, name, image}
            })

            res.status(200).json({
                statusCode:200,
                message:"User's profile succefully updated",
                payload:editedUser
            })

        } catch (error) {
            throw new Exception(400,"Failed to update user profile" )
        }
    };

    async deleteUser(req:Request, res:Response){
        try {
            const {id} = req.params;
            const deletedUser = await prisma.user.delete({
                where:{id:Number(id)}
            })

            res.status(200).json({
                statusCode:200,
                message:"User's profile successfully deleted",
                payload:deletedUser
            })
        } catch (error) {
            throw new Exception(400,"Error deleting user's profile")
        }
    }


}