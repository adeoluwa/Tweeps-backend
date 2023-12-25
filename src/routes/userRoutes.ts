import { Router } from "express";

const router = Router();

// create User
router.post("/", (req, res) => {
    res.status(501).json({
        error: "Not Implemented"
    })
})

// List Users
router.get('/', (req, res) => {
    res.status(501).json({
        error: "Not implemented!"
    });
})

//get a single user
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({
        error: `Not implemented!: ${id}`
    });
})

//update user
router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({
        error: `Not implemented!: ${id}`
    });
})

// delete user
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({
        error: `Not implemented!: ${id}`
    });
})

export default router;