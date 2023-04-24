import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    account: {
      type: String,
      required: [true, '必填喔'],
      unique: true,
      minlength: [4, '帳號不得低於 4 個字'],
      maxlength: [20, '帳號不得高於 20 個字'],
      match: [/^[A-Za-z0-9]+$/, '帳號格式錯誤']
    },
    password: {
      type: String
    },
    role: {
      type: Number,
      default: 0
    },
    likes: {
      type: [
        {
          w_id: {
            type: mongoose.ObjectId,
            ref: 'words',
            required: [true, '沒有單字']
          }
        }
      ]
    },
    tokens: {
      type: [String]
    }
  },
  { versionKey: false }
)

const users = mongoose.model('users', userSchema)

export default users
