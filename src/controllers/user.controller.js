const allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  const userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  const adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
   
  const vendedorBoard = (req, res) => {
    res.status(200).send("Vendedor Content.");
  };
  
  module.exports ={

    allAccess,userBoard,adminBoard,vendedorBoard
  }