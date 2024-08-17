import { render } from '@react-email/components'
import nodemailer from 'nodemailer'
import NotionMagicLinkEmail from '../email/verification'


const main = async () => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "g.ishimwe@alumni.alueducation.com",
            pass: "xxxxx"
        }
    })
    const htmlEmail = render(NotionMagicLinkEmail())
    const info = await transporter.sendMail({
        from: "g.ishimwe@alumni.alueducation",
        to: "s.ishimwegabin@gmail.com",
        html: htmlEmail
    })
    console.log("Message Sent " + info.messageId)
}
export default main;