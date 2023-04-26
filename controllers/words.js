import words from '../models/words.js'

export const createNewWord = async (req, res) => {
  try {
    await words.create(req.body)
    res.status(200).json({ success: true, message: '新增成功' })
  } catch (error) {
    res.status(400).json({ success: false, message: '新增失敗', result: error })
  }
}

export const getfilterWords = async (req, res) => {
  try {
    // const query = { $and: [] }
    console.log(req.query)
    const result = await words.find({})
    res.status(200).json({ success: true, message: '', result })
  } catch (error) {
    res.status(400).json({ success: false, message: '查詢失敗', result: error })
  }
}
