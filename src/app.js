const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs")
const port = process.env.PORT || 3000;

// Public static path
const staticpath = (path.join(__dirname, "../public"))
const partial_path = (path.join(__dirname, "../templates/partials"))
const templpath = (path.join(__dirname, "../templates/views"))
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templpath);
hbs.registerPartials(partial_path)

//Routing
 app.get("", (req,res) => {
res.render("index")
 })
 app.get("/about", (req,res) => {
    res.render("about")
     })
     app.get("/weather", (req,res) => {
        res.render("weather")
         })
         app.get("*", (req,res) => {
            res.render("404error", {
               ermsg:"Oops! Page Not Found"
            })
             })
 app.listen(port, () => {
    console.log(`Started at port ${port}`)
 })