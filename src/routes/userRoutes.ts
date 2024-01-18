import { Router } from "express";

import { UserController } from "../controllers/user_controller";

class UserRouter {
    private userController = new UserController();
    readonly router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router 

            // create user
            .post("/", this.userController.createUsers)

            // list users
            .get("/", this.userController.listUsers)

            // get user
            .get("/:id", this.userController.getUser)

            // uodate user's profile
            .put("/:id", this.userController.editUser)

            // delete user
            .delete("/:id", this.userController.deleteUser)
    }
}

export default new UserRouter