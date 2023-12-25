"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send("Api For Tweeps....");
});
app.listen(3000, function () {
    console.log("Server ready at localhost:3000");
});
