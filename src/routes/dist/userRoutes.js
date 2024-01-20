"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_controller_1 = require("../controllers/user_controller");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.userController = new user_controller_1.UserController();
        this.router = express_1.Router();
        this.initializeRoutes();
    }
    UserRouter.prototype.initializeRoutes = function () {
        this.router
            // create user
            .post("/", this.userController.createUsers)
            // list users
            .get("/", this.userController.listUsers)
            // get user
            .get("/:id", this.userController.getUser)
            // uodate user's profile
            .put("/:id", this.userController.editUser)["delete"]("/:id", this.userController.deleteUser);
    };
    return UserRouter;
}());
exports["default"] = new UserRouter;
