
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';

import  users from './routes/user.js'; 

mongoose.connect("mongodb+srv://dbUser:AbcShi12@cluster0.demdm.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology:true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});