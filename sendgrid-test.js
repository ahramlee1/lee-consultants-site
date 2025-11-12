// sendgrid-test.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "ahram.lee@lee-consultants.com",
  from: "ahram.lee@lee-consultants.com",
  subject: "SendGrid Test from Local Script",
  text: "This is a live SendGrid test sent directly via API key.",
};

sgMail
  .send(msg)
  .then(() => console.log("✅ Email sent successfully!"))
  .catch((error) => console.error("❌ Error sending email:", error));

