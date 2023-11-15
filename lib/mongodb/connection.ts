import mongoose from 'mongoose';

const mongoDBConnection = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connected to MongoDB");
    }catch(e){
        console.log(e);
    }
}

export default mongoDBConnection;