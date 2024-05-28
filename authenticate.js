const authenticate = (req,res,next)=> {
    const {user}=req.query
    if(user === 'May') {
      req.user = { name: 'May', email: 'may@gmail.com'}
      next()
    }

    else {
        res.status(401).send('unauthorized')
    }
}

module.exports= authenticate