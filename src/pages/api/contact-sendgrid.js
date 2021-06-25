export default function (req, res) {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'luanferreira2136@gmail.com',
    from: 'newmoon.sender@gmail.com',
    subject: 'Contato site NewMoon',
    text: `Novo e-mail: ${req.body.email}`,
    html: `
      <h3>Novo e-mail recebido:</h3>
      <code>${req.body.email}</code>
          `,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error)
    })
}