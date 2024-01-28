const brevo = require("@getbrevo/brevo");

const { EMAIL, BREVO_KEY } = process.env;

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.authentications.apiKey.apiKey = BREVO_KEY;

const sendEmail = async (data) => {
  const email = { ...data, sender: { email: EMAIL } };
  await apiInstance.sendTransacEmail(email);
  return true;
};

module.exports = sendEmail;

// const brevo = require("@getbrevo/brevo");
// const envsConfig = require("../configs/envsConfig");
// const apiInstance = new brevo.TransactionalEmailsApi();

// apiInstance.authentications.apiKey.apiKey = envsConfig.brevoApiKey;

// const email = {
//   subject: "Test",
//   sender: { email: envsConfig.email, name: "Olena" },
//   to: [{ email: "helensmart2323@gmail.com" }],
//   htmlContent: "<html><body><h2>Test message</h2></body></html>",
// };

// apiInstance.sendTransacEmail(email).then(() => {
//   console.log("Sended");
// });
