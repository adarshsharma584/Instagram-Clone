import mongoose from 'mongoose';

 export const ConnectDB = async () => {
 try {
    await mongoose.connect("mongodb://localhost:27017/instaDB");
    console.log('MongoDB connected successfully');
 } catch (error) {
     console.log('MongoDB connection failed:', error.message);
     process.exit(1);
     }
}