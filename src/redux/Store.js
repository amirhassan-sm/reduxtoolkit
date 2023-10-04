import addtoshop from "./AddProducts"
const { configureStore } = require("@reduxjs/toolkit");

 export const Store= configureStore({
    reducer:{add:addtoshop}
 })