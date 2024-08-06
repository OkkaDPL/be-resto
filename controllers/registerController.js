import bcrypt, { genSalt } from "bcrypt";
import users from "../models/users.js";

async function register(req, res) {
  try {
    const { username, password, email } = req.body;
    const hashPass = await bcrypt.hash(password, await genSalt(10));
    await users.create({
      username: username,
      password: hashPass,
      email: email,
    });

    res.json({ msg: "User berhasil ditambahkan!" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export default register;
