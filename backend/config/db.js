import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://raiarik97:Hisokamorrow1@cluster0.j2nqavm.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
