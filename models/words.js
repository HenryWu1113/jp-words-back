import mongoose from 'mongoose'

const wordSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: [true, '必填喔'],
      unique: true,
      minlength: 1
    },
    hiragana: {
      required: [true, '必填喔'],
      minlength: 1
    },
    chinese: {
      type: String
    },
    // 音調
    tone: {
      type: Number
    },
    // 詞性 (動詞、名詞...)
    speech: {
      type: String
    },
    sentence: {
      type: String
    }
    // te: {
    //   type: String
    // },
    // ta: {
    //   type: String
    // },
    // hite: {
    //   type: String
    // },
    // kano: {
    //   type: String
    // },
    // ikou: {
    //   type: String
    // }
  },
  { versionKey: false }
)

const words = mongoose.model('words', wordSchema)

export default words
