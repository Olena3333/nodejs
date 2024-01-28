require("dotenv").config();

const { DB_HOST, PORT, BREVO_API_KEY, EMAIL } = process.env;

module.exports = {
  port: PORT,
  dbHost: DB_HOST,
  brevoApiKey: BREVO_API_KEY,
  email: EMAIL,
};
