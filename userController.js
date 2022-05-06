const { pool } = require("./db");

const createUser = async (req, res) => {
  try {
    const { firstname } = req.body;
    const { lastname } = req.body;
    const { email } = req.body;
    const { password1 } = req.body;
    const { password2 } = req.body;

    if (!firstname || !lastname || !email) {
      res.status(400).json({
        message: "Please fill out all fields",
      });
    } else {
      if (password1 !== password2) {
        res.status(400).json({
          message: "Passwords don't match",
        });
      } else {
        const validate = await pool.query(
          'SELECT email FROM "user" WHERE email=$1',
          [email]
        );

        if (validate.rows[0]) {
          res.status(400).json({
            message: "Email already taken",
          });
        } else {
          const user = await pool.query(
            'INSERT INTO "user" (firstname,lastname,email,password) VALUES($1, $2, $3, $4) RETURNING *',
            [firstname, lastname, email, password1]
          );
          res.json(user.rows[0]);
        }
      }
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { createUser };
