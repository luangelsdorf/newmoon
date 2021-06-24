export default function (req, res) {
  if (req.method === 'POST') {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.email,
      to: 'luanferreira2136@gmail.com',
      subject: `Nova Inscrição | Site NewMoon`,
      text: `Nova inscrição para ${req.body.email}`,
      html: `
                <div>Nova inscrição recebida:</div>
                <p><strong>E-mail</strong>: ${req.body.email}</p>
              `
    }

    transporter.sendMail(mailData, (err, data) => {
      if (err) {
        console.log(err);
        res.send("error" + JSON.stringify(err));
      } else {
        console.log("mail send");
        res.send("success");
      }
    });
  }
}