import { Router } from "express";

const router = Router()

// create Tweets
router.post("/", (req, res) => {
    res.status(501).json({
        error: "Not Implemented"
    })
})

// List Tweets
router.get('/', (req, res) => {
    res.status(501).json({
        error: "Not implemented!"
    });
})

//get a single Tweet
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({
        error: `Not implemented!: ${id}`
    });
})

//update Tweet
router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({
        error: `Not implemented!: ${id}`
    });
})

// delete Tweet
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({
        error: `Not implemented!: ${id}`
    });
})

export default router;