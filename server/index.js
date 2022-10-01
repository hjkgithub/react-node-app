const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();


app.get("/api", (req, res) =>{
    res.json({ message: "Hello from Expresshey!" })

});

app.get("/home", (req, res) =>{
    res.json({ message: "i am home page" })

});

app.get("/users", (req, res) => {
    res.json({message: "i am users page"})
})


app.get("/users/userid/439", (req, res) => {
    res.json({id :"439"})
})



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});