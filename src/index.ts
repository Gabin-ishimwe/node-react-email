import express from 'express'
import main from './nodemailer/nodemailer';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        main()
        res.send("Send to email")
    } catch (error) {
        console.log("Failed to send Email ", error)
    }
})

app.listen(port, () => {
    console.log("Server running on port ", port)
})