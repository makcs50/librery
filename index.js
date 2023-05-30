const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(require('./routes/client.route'));
app.use(require('./routes/book.route'));
app.use(require('./routes/genre.route'));
app.use(require('./routes/review.route'));


(async function(){
    try{
        await mongoose.connect(
            "mongodb+srv://lechiev2015:token95@cluster0.qpdtotg.mongodb.net/librery"  
        )
        app.listen(4000);
        console.log('сервер запущен');
    }
    catch (error){
        console.log(error.message)
    }

})()