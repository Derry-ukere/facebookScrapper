import nodeMailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'

const sendMail = (postName, commentName, emailAddress) => {
  try {
    const transporter = nodeMailer.createTransport(
      smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'mudiagaukere@gmail.com',
          pass: 'LootingAvenger101',
        },
      })
    )
    const output = `
    <h3>Data Updates from Groups And Comment</h3>
    <p>Find below the posts and comments from a new group</p>
  `

    const mailOptions = {
      from: 'derryukere@gmail.com',
      to: emailAddress,
      subject: "You've Got New Data From FaceBook Scrapper",
      html: output,
      attachments: [
        {
          // file on disk as an attachment
          filename: postName,
          path: `./${postName}`,
        },
        {
          // file on disk as an attachment
          filename: commentName,
          path: `./${commentName}`,
        },
      ],
    }

    // send mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
  } catch (error) {
    console.log('error occured in sendMail func: ', error)
  }
}
export { sendMail }
