import { Router } from "express";

import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// create User
router.post("/", async (req, res) => {
    const { email, name, username } = req.body;

    try {
        // console.log(email, name, username);
        const createUser = await prisma.user.create({
            data: {
                email,
                name,
                username,
                bio: "Hello there, I am using Tweeps, let's connect",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0groa4TIPGawvqv3iM3eibhHTyGbLxlTQR5QcAkjNg&s",
            },
        })
        res.status(201).json(createUser)
    } catch (error) {
        res.status(400).json({ error: 'Username and email should be unique' })
    }
})

// List Users
router.get('/', async (req, res) => {
    const allUser = await prisma.user.findMany();
    res.json(allUser);
})

//get a single user 
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id: Number(id) } })
    res.json(user);
})

//update user
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { bio, name, image } = req.body

    try {
        const editedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: { bio, name, image }
        })

        res.status(200).json(editedUser)
    } catch (error) {
        res.status(400).json({ error: `Failed to update user Profile` })
    }
})

// delete user
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await prisma.user.delete({ where: { id: Number(id) } })
    res.sendStatus(204);
})

export default router;