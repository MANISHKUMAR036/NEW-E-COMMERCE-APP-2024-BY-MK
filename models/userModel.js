import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
      name:{
        type:String,
        required: true,
        trim: true // it remove all white spaces
      },
      email:{
        type: String,
        required: true,
        unique:true // here we added unique becoz there is only one email for one user
      },
      password:{
        type: String,
        required: true,
      },
      phone:{
        type: String,
        required: true,
      },
      address:{
        type: String,
        required: true,
      },
      role:{
        type: Number,
        default:0
      }
}, 
{timestamps:true} // this is another object. hence when new user will be created then its created time will be added there.
)

export default mongoose.model('users', userSchema)