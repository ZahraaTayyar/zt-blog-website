const express = require("express");
const app = express();

console.log("hello");

app.listen("3000", () => {
    console.log("Backend is running");
})