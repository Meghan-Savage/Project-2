import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);



// const User = mongoose.model("user", userSchema, "users");

// export const createUser = async (newUser) => {
//   try {
//     const hashedPassword = bcrypt.hashSync(newUser.password, 10);
//     const createdUser = await User.create({
//       ...newUser,
//       password: hashedPassword,
//     });
//     return createdUser;
//   } catch (error) {
//     if (error.code === 11000) {
//       throw new Error("Duplicate Error");
//     }
//   }
// };

// export const verifyPassword = async (email, password) => {
//   const user = await User.findOne({ email });
//   if (user && bcrypt.compareSync(password, user.password)) {
//     const userData = user.toObject();
//     delete userData.password;
//     return userData;
//   } else {
//     return null;
//   }
// };

export default User;
