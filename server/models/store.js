import mongoose from "mongoose";
import { ObjectId } from "mongoose";

const storeSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  retailer: { type: String, required: true },
  storeKey: {
    type: String,
    required: true,
    default: new mongoose.Types.ObjectId(),
  },
  address: { type: String, required: false, unique: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  isFavourite: { type: Boolean, required: true, default: true },
  // UserID: { type: mongoose.SchemaTypes.ObjectId, ref: "user" },
});

export const store = mongoose.model("store", storeSchema);

export const createStore = async (newStore) => {
  try {
    const createdStore = await store.create(newStore);
    return createdStore;
  } catch (error) {
    if ((error.code = 11000)) {
      throw new Error("Duplicate store ID");
    }
  }
};

export const listStores = async () => {
  const allStores = await store.find();
  return allStores;
};

export const updateStore = async (id, newStore) => {
  const response = await store.findByIdAndUpdate(id, newStore, {
    new: true,
  });
  return response;
};

export const deleteStore = async (id) => {
  const response = await store.findByIdAndDelete(id);
  return response;
};

export const findOneStoreByTitle = async (aTitle) => {
  const aStore = await store.findOne({ Title: aTitle });
  if (aStore == undefined) {
    throw new Error("store not found");
  }
  console.log("aStore", aStore);
  return aStore;
};

export const findStoreById = async (id) => {
  const aStore = await store.findById(id);
  return aStore;
};

export const listStoresByUserId = async (id) => {
  const stores = await store.find({ UserID: id });
  return stores;
};
