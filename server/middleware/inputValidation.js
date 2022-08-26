module.exports = function(req, res, next) {
    const { email, password, firstName, lastName } = req.body;
  
    //checks if email via regex
    function isEmailValid(email) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
  
    if (req.path === "/register") {
        //if one of the fields are missing, then alert user
      if (![email, password, firstName, lastName].every(Boolean)) {
        res.status(401)
        throw new Error("Missing credentials.")
      } else if (!isEmailValid(email)) {
        res.status(401)
        throw new Error("Invalid email.")
      } 
    } else if (req.path === "/login") {
        //if one of the fields are missing, then alert user
      if (![email, password].every(Boolean)) {
        res.status(401)
        throw new Error("Missing Credentials")
      } else if (!isEmailValid(email)) {
        res.status(401)
        throw new Error("Invalid email.")
      }
    }
  
    next();
  };