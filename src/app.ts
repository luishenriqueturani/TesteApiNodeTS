import { Router } from "express"

const express = require(`express`)

const app = express()

app.use(express.json())
app.use(Router)

export { app }
