import express from 'express'
import { home, addAccount, addTransfer, getAccount, getLasts } from '../controllers/controller.js'
const router = express.Router()

router.get('/', home)

router.post('/addaccount', addAccount)

router.post('/transfer', addTransfer)

router.get('/getaccount/:accountNumber', getAccount)

router.get('/getlasts/:accountNumber', getLasts)

export default router
