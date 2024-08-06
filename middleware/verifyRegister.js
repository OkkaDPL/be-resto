import { isNull, isExists, isSame } from "../utils/index.js";
import users from "../models/users.js";

async function verifyRegister(req, res, next) {
  try {
    const { password, repassword, username, email } = req.body;
    isSame(password, repassword, "Password & Repassword");
    isNull(username, "Usename");
    isNull(password, "Password");
    isNull(repassword, "Repassword");
    isNull(email, "Email");
    if (
      (await isExists(users, "username", username)) ||
      (await isExists(users, "email", email))
    ) {
      res.status(409).json({ msg: "Username/Email telah digunakan." });
    }
    next();
  } catch (error) {
    res.status(422).json({ msg: error.message });
  }
}
export default verifyRegister;
