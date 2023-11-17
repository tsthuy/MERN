import mongoose from "mongoose";
const UserScheme = new mongoose.Schema({
    username: {type : String, require :  true, unique : true},
    email: { type: String, require: true, unique:true },
    password: { type: String, require : true, select : false},
},
{timestamps: true}
);

 const User = mongoose.model('User', UserScheme);
export default User;
// export const getUsers = () => UserModel.find()
// export const getUserByEmail = (email : string) => UserModel.findOne({email})
// export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
//     'authentication.sessionToken' : sessionToken,
// })
// export const getUserById = (id: string) => UserModel.findById(id);
// export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());