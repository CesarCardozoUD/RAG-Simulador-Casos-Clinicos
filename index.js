
import asyncHandler from 'express-async-handler'

import express from 'express'
import geminiManager from "./utils/GeminiIAManager.js"

const app = express()
const port = 3000

app.use(express.json())

app.get('/', asyncHandler(async (req, res, next) => {
    const reqBody = req.body
    const IAResponse = await geminiManager.sendTextPrompt(reqBody)
    console.log(reqBody)
    res.send(IAResponse.response.text())
}))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})