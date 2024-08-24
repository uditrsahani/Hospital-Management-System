import connectToMongo from "../../db/db";

const signup = async () => {
  app.post("/signup", (req, res) => {
    res.send("Signed up successfully!");
  });
};

export default signup;