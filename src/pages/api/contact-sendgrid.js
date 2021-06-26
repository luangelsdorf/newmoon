export default function (req, res) {
  if (req.method === 'POST') {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: process.env.SENDGRID_TO_ADDRESS,
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
        res.status(200).send('E-mail sent successfully');
      })
      .catch((error) => {
        console.error(error);
        res.status(400).send('An error occurred while sending the e-mail')
      })
  } else {
    res.status(405).send('405 - Method not Allowed. ' + process.env.SENDGRID_TO_ADDRESS)
  }
}