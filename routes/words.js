import { createNewWord, getfilterWords } from '../controllers/words.js'
import express from 'express'
import * as auth from '../middleware/auth.js'
import content from '../middleware/content.js'

const router = express.Router()

router.post(
  '/createNewWord',
  content('application/json'),
  auth.jwt,
  createNewWord
)
router.get('/', getfilterWords)

export default router
