const express = require("express");
const app = express();

// Set EJS as templating engine
app.set("view engine", "ejs");

// Define a route
app.get("/user", (req, res) => {
  const user = { name: "Sukumar", role: "Developer", skills: ["JS", "Node", "EJS"] };
  res.render("user", { user });
});


app.get("/dashboard", (req, res) => { 
  const dashboard = { 
    user: "Sukumar", 
    notifications: ["New message", "Server restarted", "Backup complete"] 
  }; 
  res.render("dashboard", { dashboard }); 
});


app.listen(3000, () => console.log("Server running on port 3000")); ``