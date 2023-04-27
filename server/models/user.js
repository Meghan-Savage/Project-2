import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Email: { type: String, required: true, unique: true },
  UserName: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
});

//delete all attached Stores when we delete a user
userSchema.pre("deleteMany", function (next) {
  var aUser = this;
  aUser.model("Store");
  // Remove all the assignment docs that reference the removed person.
  this.model("Store").deleteOne({ UserID: aUser._id }, next);
});

// userSchema.pre("deleteUser", function (next) {
//   const userId = this.getQuery()["_id"];
//   console.log('userId', userId);
//   mongoose
//     .model("Store")
//     .deleteMany({ UserID: userId }, function (err, result) {
//       if (err) {
//         console.log(`[error] ${err}`);
//         next(err);
//       } else {
//         console.log("success");
//         next();
//       }
//     });
// });

export const user = mongoose.model("user", userSchema);

export const createUser = async (newUser) => {
  try {
    const createdUser = await user.create(newUser);
    return createdUser._id;
  } catch (error) {
    if ((error.code = 11000)) {
      throw new Error("Duplicate UserName or Email");
    }
  }
};

export const listUsers = async () => {
  const allusers = await user.find();
  return allusers;
};

export const updateUser = async (id, newUser) => {
  const response = await user.findByIdAndUpdate(id, newUser, {
    new: true,
  });
  return response;
};

export const deleteUser = async (id) => {
  const response = await user.findByIdAndDelete(id);
  return response;
};

export const findOneUserByName = async (name) => {
  console.log("name", name);
  const aUser = await user.findOne({ UserName: name });
  console.log("aUser", aUser);
  return aUser;
};

export const findUserById = async (id) => {
  console.log("id", id);
  const aUser = await user.findById(id);
  console.log("aUser", aUser);

  return aUser;
};
