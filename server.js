var express = require("express");
var shivaRouter = require("./routes/shivaRouter");
var bodyparser = require("body-parser");
var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

//body parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use('/shivarouter', shivaRouter)

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
}

app.listen(PORT, () => { console.log(`Server started at ${PORT}`) });
app.get("/", (req, res) => { res.send(`App is running on ${PORT}`) });
app.get('/players',(req,res)=>{
  res.send([{
    "id":1,
    "name":"Nagarjuna",
    "team":"India",
    "age": "30 years 230 days",
    "born":"November 5, 1988, Delhi",
    "batting":"Right-hand bat",
    "bowling":"Right-arm medium",

},
{
    "id":2,
    "name1":"Shiva Prasad",
    "team1":"India",
    "age1": "23 years 326 days",
    "born1":"December 6, 1993, Ahmedabad",
    "batting1":"Right-hand bat",
    "bowling1":"Right-arm medium",
}])
})