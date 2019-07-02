const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const connect = require('../db/connect.js');
const Passengers = require('../db/passengers.js');

// console.log(db.collection("Titanic", (err, collection) => {
//     collection.find()
// }))

app.use(cors());
app.use(parser.json());
app.use(
    parser.urlencoded({
        extended: true,
    })
)

app.use(express.static(path.join(__dirname + '/../dist')));

app.get('/api/passengers/survival', async (req, res) => {
    const passengers = await Passengers.find({}).lean().exec();
    res.status(200).json(passengers);
});


let port = process.env.PORT || 3008;

connect('mongodb://localhost/mydb')
    .then(() => app.listen(port, () => {
        console.log(`listening on port ${port}`);
    }))
    .catch(e => console.error(e))
