import User from "../../src/model/User.js"

//create new user is controllers/auth.js
//login is in auth.js

export const updateUser = async(req, res, next) =>{
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body },
            {new: true}
        );
        res.status(200).json(updatedUser);
    }catch (err){
        next(err);
    }
}

export const deleteUser = async(req, res, next) =>{
    try{
        const deletedUser = await User.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json(deletedUser);
    }catch (err){
        next(err);
    }
}

export const getUser = async(req, res, next) =>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(users);
    }catch (err){
        next(err);
    }
}

const getUsers = async(req, res, next) =>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch (err){
        next(err);
    }
}

export default getUsers;