const mainController = (req, res) => {
    res.send('Hello buddy')
}

const userController = (req, res) => {
    console.log(req)
    res.send(`Hello ${req.params.username}`)
}

const queryController=(req,res)=>{
    res.send(req.query.keyword)
}

const userLogin= (req,res)=>{
    res.send('login page')
}
const userSignUp= (req,res)=>{
    res.send('signup page')
}

module.exports = {mainController, userController, queryController, userLogin, userSignUp}